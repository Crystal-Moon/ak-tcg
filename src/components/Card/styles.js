/* eslint-disable */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    position: 'relative',
    height: 512,
    width: 360,
    border: 'none',
    margin: 'auto',
  },
  capa: {
    position: 'absolute',
    height: '100%',
    width: '100%',
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
    width: 64,
    height: 64,
    bottom: 14,
    right: 12,
    marginTop: 'auto',
    marginLeft: 'auto',
  },
  txt: {
    height: 'max-content',
    whiteSpace: 'pre',
    textAlign: 'center',
    verticalAlign: 'middle',
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 24, // subir a 24 si se necesita ancho
    fontWeight: 500,
    // '-webkit-text-stroke': '1px black',
    textShadow:
      '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
  },
  title: {
    bottom: 79,
  },
  name: {
    bottom: 46,
  },
  lvl: {
    width: 64,
    left: 21,
    top: 33,
    fontSize: 35,
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: 400,
  },
});
