/* eslint-disable */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    position: 'relative',
    height: 512,
    width: 360,
    border: 'none',
  },
  capa: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  bg: {
    backgroundColor: 'grey',
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
    fontSize: 16,
    fontWeight: 300,
  },
  title: {
    bottom: 69,
  },
  name: {
    bottom: 46,
  },
  lvl: {
    width: 64,
    left: 21,
    top: 37,
    fontSize: '2em',
    fontWeight: 400,
  },
});
