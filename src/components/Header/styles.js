import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    flexDirection: 'row',
    backgroundColor: '#9DCCC2',
    padding: '0.5em',
  },
  logo: {
    display: 'inline-block',
    height: '1.5em',
    verticalAlign: 'middle',
    marginRight: '0.3rem',
  },
  title: {
    fontFamily: '"Galada", cursive',
    fontSize: '1.8rem',
    margin: '0.3rem',
  },
});
