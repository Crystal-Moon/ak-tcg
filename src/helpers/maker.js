import {
  adjustFiles,
  adjustText,
  funcComposite,
  funcWrite,
  download,
} from './tools';
import makeGif from './gifer';

const makeImage = (card, cb_gif) => {
  const canvas = document.createElement('canvas');
  canvas.width = 303;
  canvas.height = 432;

  const ctx = canvas.getContext('2d');
  const composite = funcComposite(ctx);
  const write = funcWrite(ctx);

  const files = adjustFiles(card);
  const texts = adjustText(card);

  const imagePromise = files.reduce((_, obj) => composite(obj), 0);
  const cardPromise = imagePromise.then(() =>
    texts.reduce((_, obj) => write(obj), 0)
  );

  cardPromise.then(() =>
    cb_gif
      ? makeGif(canvas.toDataURL(), cb_gif)
      : canvas.toBlob(blob => download(blob, 'jpg'))
  );
};

export default makeImage;
