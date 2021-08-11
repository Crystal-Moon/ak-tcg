import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    backgroundColor: '#31D6B2',
    fontSize: '0.9em',
    borderTop: '3px solid white',
  },
  footer: {
    paddingTop: '1em',
    paddingBottom: '1em',
    textAlign: 'center',
    '& p': {
      margin: 0,
      amrginBottom: '0.5em',
    },
  },
  sign: {
    fontSize: '0.8em',
    backgroundColor: 'black',
    padding: '0.4rem',
    color: 'white',
    '& img': {
      marginRight: '0.2rem',
      marginLeft: '0.2rem',
    },
  },
  CM_logo: {
    color: '#da86ef',
    marginLeft: '0.2em',
    marginRight: '0.5em',
  },
  contadorContainer: ({ isSm }) => {
    const style = {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      '&>*': { display: 'inline-block' },
    };
    if (isSm) {
      style.justifyContent = 'center';
      style.width = '100%';
    }
    return style;
  },
  contador: {
    margin: '0.2em',
    marginRight: '0.5em',
  },
});
