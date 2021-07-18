import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  paper: {
    padding: '1.5em',
    '& p': {
      margin: 0,
      textAlign: 'center',
    },
  },
  btn: {
    margin: '0.5em',
  },
  loading: {
    height: '1em',
    margin: 'auto',
    fontSize: '1.7em',
  },
});
