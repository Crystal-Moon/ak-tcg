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
    top: 0,
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
    height: 55,
    bottom: 11,
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
    top: 339,
    zIndex: 200,
  },
  name: {
    top: 369,
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
    height: 350,
    width: 550,
    transition: 'all 4s ease',
    top: 0,
    zIndex: 100,
    animation: '$shine 10s infinite ease',
    '&>div.orange': {
      width: 550,
      height: 80,
      background:
        'linear-gradient(180deg, rgba(255,255,255,0) 29%, rgb(165 90 26 / 36%) 81%)',
    },
    '&>div.white': {
      width: 550,
      height: 250,
      background:
        'linear-gradient(180deg, rgb(253,236,176,0.9) 1%, rgba(255,255,255,0) 90%)',
    },
  },
  hole: {
    zIndex: 150,
  },
  '@keyframes shine': {
    '0%': { transform: 'translateX(-258px) rotate(159deg) translateY(-500px)' },
    '100%': { transform: 'translateX(0px) rotate(159deg) translateY(580px)' },
  },
});
