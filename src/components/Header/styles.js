import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    flexDirection: 'row',
    backgroundColor: '#deffed',
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
  },
});
