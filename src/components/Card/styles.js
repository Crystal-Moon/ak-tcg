import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    position: 'relative',
    height: 432,
    width: 303,
    border: 'none',
    margin: 'auto',
    overflow: 'hidden',
  },
  capa: {
    position: 'absolute',
    height: '100%',
    width: '100%',

    '& img': {
      height: 'inherit',
      width: 'inherit',
    },
  },
  bg: {
    backgroundColor: '#777777',
    backgroundImage:
      'url("https://icon-library.com/images/no-icon-png/no-icon-png-6.jpg")',
    backgroundPosition: 'center center',
    backgroundSize: '20% auto',
    backgroundRepeat: 'no-repeat',
    '& img': {
      backgroundColor: 'white',
    },
  },
  element: {
    width: 56,
    height: 56,
    bottom: 10,
    right: 9,
    marginTop: 'auto',
    marginLeft: 'auto',
    zIndex: 55,
  },
  txt: {
    height: 'max-content',
    whiteSpace: 'pre',
    textAlign: 'center',
    verticalAlign: 'middle',
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 20,
    fontWeight: 500,
    textShadow:
      '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
    zIndex: 55,
  },
  title: {
    bottom: 68,
    zIndex: 200,
  },
  name: {
    bottom: 38,
    zIndex: 200,
  },
  lvl: {
    width: 57,
    left: 18,
    top: 27,
    fontSize: 30,
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: 400,
  },
  cromo: {
    height: 185,
    width: 505,
    transition: 'all 4s ease',
    top: 0,
    zIndex: 100,
    animation: '$shine 4.5s infinite ease',
    '& div.shine': {
      /* eslint-disable no-dupe-keys */
      height: 185,
      width: 505,
      background: 'rgb(255,255,255)',
      background:
        'linear-gradient(180deg, rgba(255,255,255,0.9) 1%, rgba(255,255,255,0) 100%)',
    },
  },
  hole: {
    zIndex: 150,
  },
  '@keyframes shine': {
    '0%': { transform: 'translateX(-285px) rotate(159deg) translateY(-620px)' },
    '100%': { transform: 'translateX(0px) rotate(159deg) translateY(275px)' },
  },
});
