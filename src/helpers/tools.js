/* eslint-disable */
import { getStarFile, getElementFile } from './constants';
const adjustFiles = card => {
  return [
    {
      file: card.bg_uri,
      opts: { xz: 303, yz: 432 },
    },
    {
      file: getStarFile(card.star),
      opts: { xz: 303, yz: 432 },
    },
    {
      file: getElementFile(card.element),
      opts: { x: 238, y: 366, xz: 56, yz: 55 },
    },
  ];
};
const adjustText = card => {
  return [
    {
      txt: card.title,
      opts: { y: 358, font: '20px Nunito Sans' },
    },
    {
      txt: card.name,
      opts: { y: 387, font: '20px Nunito Sans' },
    },
    {
      txt: card.level,
      opts: { x: 45, y: 60, size: 35, font: '30px Open Sans' },
    },
  ];
};

const funcComposite = ctx => ({ file, opts = {} }) =>
  new Promise(done => {
    const { x = 0, y = 0, xz, yz } = opts;
    const image = new Image();
    //image.crossOrigin = 'Anonymous';
    image.onload = function () {
      ctx.drawImage(image, x, y, xz, yz);
      done();
    };
    image.src = file;
  });

const funcWrite = ctx => ({ txt, opts = {} }) =>
  new Promise(done => {
    const { font, x = 151, y } = opts;
    ctx.font = font;
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.textAlign = 'center';
    ctx.strokeText(String(txt), x, y);
    ctx.fillStyle = 'white';
    ctx.fillText(String(txt), x, y);
    done();
  });

const download = (blob, ext) => {
  console.log('descargado', `ak_tcg_${Date.now()}.${ext}`);

  /*
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = `ak_tcg_${Date.now()}.${ext}`;
  link.click();
  */
};

export { adjustFiles, adjustText, funcComposite, funcWrite, download };
