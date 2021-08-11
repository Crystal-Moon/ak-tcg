import GIFEncoder from 'gif-encoder-2';
import { download } from './tools';
import { shine_frames } from 'assets/imgs/shine';

export async function makeGif(cardImage, cb) {
  const canvas = document.createElement('canvas');
  const w = 303,
    h = 432;
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');

  const encoder = new GIFEncoder(w, h);
  encoder.setDelay(120);
  encoder.start();
  const addFrame = await buildMakerFrame(encoder, ctx, cardImage, h, w);

  for (const shine of shine_frames) {
    await addFrame(shine);
  }

  encoder.finish();
  const buffer = encoder.out.getData();
  const blob = new Blob([buffer], { type: 'image/gif' });
  if (cb) cb();
  download(blob, 'gif');
}

const buildMakerFrame = (encoder, ctx, back_img, h, w) =>
  new Promise(resolve => {
    const back = new Image();
    back.src = back_img;
    back.onload = function () {
      const clean = cleaner(ctx, h, w);
      resolve(
        shine =>
          new Promise(done => {
            clean();
            ctx.drawImage(back, 0, 0, w, h);
            const img = new Image();
            img.src = shine;
            img.onload = function () {
              ctx.drawImage(img, 0, 0, w, h);
              encoder.addFrame(ctx);
              done();
            };
          })
      );
    };
  });

const cleaner = (ctx, height, width) =>
  function () {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);
  };
