import {
  adjustFiles,
  adjustText,
  funcComposite,
  funcWrite,
  download,
} from './tools';
import { makeGif } from './gifer';

const makeImage = (card, isGif, cb) => {
  const canvas = document.getElementById('boxing');
  const ctx = canvas.getContext('2d');
  const composite = funcComposite(ctx);
  const write = funcWrite(ctx);

  const files = adjustFiles(card);
  const texts = adjustText(card);

  const imagePromise = files.reduce((acc, obj) => composite(obj), 0);
  const cardPromise = imagePromise.then(() =>
    texts.reduce((acc, obj) => write(obj), 0)
  );

  cardPromise.then(() =>
    isGif
      ? makeGif(canvas.toDataURL(), cb)
      : canvas.toBlob(blob => download(blob, 'jpg'))
  );
};

export { makeImage };
