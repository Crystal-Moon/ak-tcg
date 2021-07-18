import GIFEncoder from 'gif-encoder-2';
import { download } from './tools';
import { shine_frames } from 'assets/imgs/shine';

export async function makeGif(cardImage, cb) {
  const canvas = document.getElementById('boxing');
  const h = canvas.height,
    w = canvas.width;
  const ctx = canvas.getContext('2d');

  const encoder = new GIFEncoder(w, h);
  encoder.setDelay(75);
  encoder.start();
  const addFrame = await buildMakerFrame(encoder, ctx, cardImage, h, w);

  for (const shine of shine_frames) {
    let c = 1;
    await addFrame(shine, c);
    c++;
  }

  encoder.finish();
  const buffer = encoder.out.getData();
  const blob = new Blob([buffer], { type: 'image/gif' });
  if (cb) cb();
  download(blob, 'gif');
}

const buildMakerFrame = (encoder, ctx, back_img, h, w) =>
  new Promise(done => {
    const back = new Image();
    back.src = back_img;
    back.onload = function () {
      const clean = cleaner(ctx, h, w);
      done(
        shine =>
          new Promise(ok => {
            clean();
            ctx.drawImage(back, 0, 0, w, h);
            const img = new Image();
            img.src = shine;
            img.onload = function () {
              ctx.drawImage(img, 0, 0, w, h);
              encoder.addFrame(ctx);
              ok();
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
