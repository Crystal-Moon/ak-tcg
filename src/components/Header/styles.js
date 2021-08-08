import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    flexDirection: 'row',
    backgroundColor: '#9DCCC2',
    padding: '0.5em',
    fontSize: '0.8rem',
  },
  logo: {
    display: 'inline-block',
    height: '1.5em',
    verticalAlign: 'middle',
    marginRight: '0.3rem',
  },
  title: {
    fontFamily: '"Galada", cursive',
    margin: '0.3rem',
    textAlign: 'center',
    color: '#263273',
  },
});
