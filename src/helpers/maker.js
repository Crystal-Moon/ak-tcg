/* eslint-disable */
import Gif from 'make-a-gif';
import { getStarFile, getElementFile } from './constants';
import { adjustFiles, adjustText, funcComposite, funcWrite } from './tools';
import { makeGif } from './gifer';

const makeImage = (card, isGif) => {
  console.log('card', card);

  const canvas = document.getElementById('boxing');
  const ctx = canvas.getContext('2d');
  const composite = funcComposite(ctx);
  const write = funcWrite(ctx);

  const files = adjustFiles(card);
  const texts = adjustText(card);

  const imagePromise = files.reduce((acc, obj) => composite(obj), 0);

  console.log({ imagePromise });

  const finalCardPromise = imagePromise.then(() =>
    texts.reduce((acc, obj) => write(obj), 0)
  );

  console.log({ finalCardPromise });

  finalCardPromise.then(() => {
    //if(!isGif) return  download(canvas)
    const image = canvas.toDataURL();
    makeGif(image);
  });
};

function download(canvas) {
  canvas.toBlob(function (blob) {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    const fileName = 'reportName';
    link.download = fileName;
    link.click();
  });
}

export { makeImage };
