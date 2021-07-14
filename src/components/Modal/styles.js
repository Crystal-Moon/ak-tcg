/* eslint-disable */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    overflow: 'auto',
    //height: 'max-content'
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
  ghost: ({ img }) => ({
    height: 512,
    width: 360,
    position: 'absolute',
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center center',
    pointerEvents: 'none',
  }),
  avatarContainer: {},
});
