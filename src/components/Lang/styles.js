import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    flexDirection: 'row !important',
  },
  label: {
    marginLeft: '0.3em !important',
    marginRight: '0.3em !important',
    border: '0.2rem solid transparent !important',
  },
  checked: {
    borderColor: '#3f51b5 !important',
    color: '#3f51b5 !important',
    fontWeight: 'bold',
  },
});
