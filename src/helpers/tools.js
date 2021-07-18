/* eslint-disable */
import { getStarFile, getElementFile } from './constants';
const adjustFiles = card => {
  return [
    {
      file: card.bg_uri,
      opts: { xz: 303, yz: 432 },
      name: 'bg',
    },
    {
      file: getStarFile(card.star),
      opts: { xz: 303, yz: 432 },
      name: 'star',
    },
    {
      file: getElementFile(card.element),
      opts: { x: 238, y: 366, xz: 56, yz: 55 },
      name: 'element',
    },
  ];
};
const adjustText = card => {
  return [
    {
      txt: card.title,
      opts: { y: 354, font: '20px Nunito Sans' },
      name: 'title',
    },
    {
      txt: card.name,
      opts: { y: 385, font: '20px Nunito Sans' },
      name: 'name',
    },
    {
      txt: card.level,
      opts: { x: 45, y: 60, size: 35, font: '30px Open Sans' },
      name: 'lvl',
    },
  ];
};

const funcComposite = ctx => ({ file, opts = {}, name }) =>
  new Promise(done => {
    const { x = 0, y = 0, xz, yz } = opts;
    const image = new Image();
    image.onload = function () {
      ctx.drawImage(image, x, y, xz, yz);
      done();
      console.log('drawed', name);
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
    console.log('write', txt);
    done();
  });

export { adjustFiles, adjustText, funcComposite, funcWrite };
