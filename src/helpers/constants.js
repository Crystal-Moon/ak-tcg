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

// maker
import { makeImage } from './maker';

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

export { ELEMENTS, getElementFile, getStarFile, makeImage };
