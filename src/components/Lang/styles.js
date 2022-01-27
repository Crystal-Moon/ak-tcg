import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    flexDirection: 'row !important',
  },
  label: {
    marginLeft: '0.3em',
    marginRight: '0.3em',
    border: '0.2rem solid',
    borderColor: 'transparent',
  },
  checked: {
    borderColor: '#3f51b5',
    color: '#3f51b5',
    fontWeight: 'bold',
  },
});
