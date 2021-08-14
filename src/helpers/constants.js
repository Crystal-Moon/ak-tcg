import isPositive from 'validate.io-positive-integer';

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

export const ELEMENTS = [
  'brutal',
  'storm',
  'fire',
  'lightning',
  'ice',
  'holy',
  'dark',
];

export const ELEMENT_FILES = {
  brutal,
  storm,
  fire,
  lightning,
  ice,
  holy,
  dark,
};

export const STAR_FILES = { _1, _2, _3, _4, _5 };

export const DEFAUTL_CARD = {
  name: 'NickName',
  title: '',
  level: 25,
  element: 'brutal',
  star: 1,
  bg_uri: null,
};

export const cardValidators = {
  name: v => !!v.length,
  title: () => true,
  level: v => /^([0-9]{1,2})$/g.test(v) && isPositive(Number(v)),
  element: v => ELEMENTS.includes(v),
  star: v => /[0-5]/g.test(v),
  bg_uri: v => String(v) !== 'null',
};
