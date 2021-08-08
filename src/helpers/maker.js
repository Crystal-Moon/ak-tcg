/* eslint-disable */
import {
  adjustFiles,
  adjustText,
  funcComposite,
  funcWrite,
  download,
} from './tools';
import { makeGif } from './gifer';

const makeImage = (card, isGif, cb) => {
  console.log('card', { card, isGif, cb });
  const canvas = document.createElement('canvas');
  //const canvas = document.getElementById('boxing');
  const w = 303,
    h = 432;
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  const composite = funcComposite(ctx);
  const write = funcWrite(ctx);

  const files = adjustFiles(card);
  const texts = adjustText(card);
  //console.log({ files, texts });

  const imagePromise = files.reduce((_, obj) => composite(obj), 0);
  const cardPromise = imagePromise.then(() =>
    texts.reduce((_, obj) => write(obj), 0)
  );

  cardPromise.then(() =>
    isGif
      ? makeGif(canvas.toDataURL(), cb)
      : canvas.toBlob(blob => download(blob, 'jpg'))
  );
};

export { makeImage };
