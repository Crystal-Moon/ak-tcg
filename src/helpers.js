/* eslint-disable */
import Gif from 'make-a-gif';

// elements
import lightning from 'assets/icons/e_lightning.png';
import brutal from 'assets/icons/e_brutal.png';
import storm from 'assets/icons/e_storm.png';
import dark from 'assets/icons/e_dark.png';
import fire from 'assets/icons/e_fire.png';
import holy from 'assets/icons/e_holy.png';
import ice from 'assets/icons/e_ice.png';

// marcos
import _1 from 'assets/imgs/macro_1.png';
import _2 from 'assets/imgs/macro_2.png';
import _3 from 'assets/imgs/macro_3.png';
import _4 from 'assets/imgs/macro_4.png';
import _5 from 'assets/imgs/macro_5.png';

const ELEMENTS = [
  'brutal',
  'storm',
  'fire',
  'lightning',
  'ice',
  'holy',
  'dark',
];

const ELEMENT_FILES = {
  brutal,
  storm,
  fire,
  lightning,
  ice,
  holy,
  dark,
};

const getElementFile = (elem = 'brutal') => {
  return ELEMENT_FILES[elem];
};

const STAR_FILES = { _1, _2, _3, _4, _5 };
const getStarFile = (n = 1) => {
  return STAR_FILES[`_${n}`];
};

const makeImage = (card, isGif) => {
  console.log('card', card);

  const canvas = document.getElementById('boxing');
  const ctx = canvas.getContext('2d');

  composite(
    ctx,
    card.bg_uri,
    {
      xz: 303,
      yz: 432,
    },
    'bg'
  )
    .then(() =>
      composite(
        ctx,
        getStarFile(card.star),
        {
          xz: 303,
          yz: 432,
        },
        'star'
      )
    )
    .then(() =>
      composite(
        ctx,
        getElementFile(card.element),
        { x: 238, y: 366, xz: 56, yz: 55 },
        'element'
      )
    )

    .then(() => write(ctx, card.title, { y: 354, font: '20px Nunito Sans' }))
    .then(() => write(ctx, card.name, { y: 385, font: '20px Nunito Sans' }))
    .then(() =>
      write(ctx, card.level, { x: 45, y: 60, size: 35, font: '30px Open Sans' })
    );
  //.then(() => download(canvas)); // funciona bien :D

  /*
  composite(ctx, card.bg_uri, {});
  composite(ctx, getStarFile(card.star), {});
  composite(ctx, getElementFile(card.element), { x: 284, y: 434 });

  write(ctx, card.level, { x: 10, y: 50 });
  write(ctx, card.name, { x: 50, y: 150 });
*/
};
const write = async (ctx, text, { font, x = 151, y }) => {
  ctx.font = font;
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 3;
  ctx.textAlign = 'center';
  ctx.strokeText(String(text), x, y);
  ctx.fillStyle = 'white';
  ctx.fillText(String(text), x, y);
  console.log('write', text);
};
const composite = (ctx, data, { x = 0, y = 0, xz = 303, yz = 432 }, name) =>
  new Promise(done => {
    const image = new Image();
    image.onload = function () {
      ctx.drawImage(image, x, y, xz, yz);
      done();
      console.log('drawed', name);
    };
    image.src = data;
  });

function download(canvas) {
  canvas.toBlob(function (blob) {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    const fileName = 'reportName';
    link.download = fileName;
    link.click();
  });
}

export { ELEMENTS, getStarFile, getElementFile, makeImage };
