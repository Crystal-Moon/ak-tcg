/* eslint-disable */
import { makeStyles } from '@material-ui/core/styles';
import ukn_4 from 'assets/imgs/unknown_4.png';
import ukn_14 from 'assets/imgs/unknown_14.png';
import ukn_15 from 'assets/imgs/unknown_15.png';

export const useStyles = makeStyles({
  root: {
    '& p, & h2': {
      margin: 0,
      marginBottom: '0.7em',
    },
    '& h2': {
      textAlign: 'center',
    },
    paddingBottom: '3em',
    paddingTop: '4em',
    backgroundImage: `url(${ukn_14})`,
    backgroundSize: 'cover',
    height: '90vh',
    minHeight: '38em',
    backgroundPosition: 'bottom center',
  },
  mainContainer: {
    backgroundColor: '#e4ebff',
    borderRadius: '0.5em',
    padding: '2.7em',
    paddingRight: 0,
  },
  cardContainer: {
    minWidth: 380,
  },
});
