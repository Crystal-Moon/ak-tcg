import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    flexDirection: 'row',
    backgroundColor: 'pink',
  },
  logo: {
    display: 'inline-block',
    height: '1.5em',
    verticalAlign: 'middle',
  },
  title: {
    margin: '0.3rem',
  },
});
