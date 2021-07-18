/* eslint-disable */
import GIFEncoder from 'gif-encoder-2';
import { funcComposite } from './tools';
// frames
import _01 from 'assets/imgs/shine/01.png';
import _02 from 'assets/imgs/shine/02.png';
import _03 from 'assets/imgs/shine/03.png';
import _04 from 'assets/imgs/shine/04.png';
import _05 from 'assets/imgs/shine/05.png';
import _06 from 'assets/imgs/shine/06.png';
import _07 from 'assets/imgs/shine/07.png';
import _08 from 'assets/imgs/shine/08.png';
import _09 from 'assets/imgs/shine/09.png';
import _10 from 'assets/imgs/shine/10.png';
import _11 from 'assets/imgs/shine/11.png';
import _12 from 'assets/imgs/shine/12.png';
import _13 from 'assets/imgs/shine/13.png';
import _14 from 'assets/imgs/shine/14.png';

const shineFrames = [
  _01,
  _02,
  _03,
  _04,
  _05,
  _06,
  _07,
  _08,
  _09,
  _10,
  _11,
  _12,
  _13,
  _14,
];
export async function makeGif(cardImage) {
  const canvas = document.getElementById('boxing');
  const h = canvas.height,
    w = canvas.width;
  const ctx = canvas.getContext('2d');

  const encoder = new GIFEncoder(w, h);
  encoder.setDelay(200);
  encoder.start();

  const addFrame = buildMakerFrame(encoder, ctx, cardImage, h, w);

  //const finalPromise = Promise.all(shineFrames.map(addFrame));

  for (let shine of shineFrames) {
    let c = 1;
    await addFrame(shine, c);

    c++;
  }

  //console.log({ finalPromise });

  //finalPromise.then(() => {
  encoder.finish();
  const buffer = encoder.out.getData();

  const blob = new Blob([buffer], { type: 'image/gif' });
  //document.getElementById('final').src = blob;
  //writeFile(path.join(__dirname, 'output', 'beginner.gif'), buffer, error => {
  //    // gif drawn or error
  //   });

  var link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = 'myFileName.gif';
  link.click();
  //});
}

const buildMakerFrame = (encoder, ctx, back_img, h, w) => {
  const clean = cleaner(ctx, h, w);
  return (shine, i) =>
    new Promise(async done => {
      await clean();
      const back = new Image();
      back.src = back_img;
      document.getElementById('final').src = back_img;
      back.onload = function () {
        ctx.drawImage(back, 0, 0, w, h);
        const img = new Image();
        img.src = shine;
        // Wait for image to be loaded

        img.onload = function () {
          console.log('drawed', i);
          ctx.drawImage(img, 0, 0, w, h);
          encoder.addFrame(ctx);
          done();
        };
      };
    });
};

const cleaner = (ctx, height, width) =>
  async function () {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);
  };
