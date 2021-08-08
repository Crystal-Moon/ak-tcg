import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    flexDirection: 'row !important',
  },
  input: {
    position: 'absolute',
    opacity: 0,
  },
  btn: {
    padding: '0.2rem !important',
  },
  label: {
    display: 'block',
    height: 'max-content',
    width: 'max-content',
    border: 'none',
    boxSizing: 'border-box',
    marginLeft: '0.3em',
    marginRight: '0.3em',
    paddingTop: '0.2em',
    borderRadius: '0.5rem',
  },
  flag: {
    height: '1em',
  },
  checked: {
    border: '0.2rem solid',
    borderColor: '#3f51b5',
    margin: 0,
    paddingTop: 0,
  },
});
