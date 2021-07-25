import { makeStyles } from '@material-ui/core/styles';
import ghost from 'assets/imgs/macro_0.png';

export const useStyles = makeStyles({
  root: {
    overflow: 'auto',
    '& p': { margin: 0, marginBottom: '0.5em' },
    '& div.MuiDialog-container': {
      height: 'max-content',
    },
  },
  paper: {
    padding: '2em',
    paddingLeft: '1.6em',
  },
  btn: {
    margin: '0.3em',
    marginLeft: '0.5em',
    marginRight: '0.5em',
  },
  ghost: ({ isSm }) => {
    const style = {
      height: 432,
      width: 303,
      position: 'absolute',
      backgroundImage: `url(${ghost})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center center',
      pointerEvents: 'none',
    };
    if (isSm) {
      style.height = 324;
      style.width = 227;
    }
    return style;
  },
  avatarContainer: {
    margin: 'auto',
    '& canvas': {
      cursor: 'move !important',
    },
  },
  iconRotate: {
    height: '1.5em',
  },
  iconZoom: {
    height: '2em',
  },
});
