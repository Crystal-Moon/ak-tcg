import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  btnInput: {
    backgroundColor: '#d9e0f5',
    width: 'max-content',
    color: '#6123be',
    paddingLeft: 14,
    paddingRight: 14,
    '&:hover': {
      backgroundColor: 'rgb(202, 189, 235, 0.7)',
    },
  },
  btnEdit: {
    padding: 6,
    borderRadius: 4,
    boxShadow:
      '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
  },
  adornedStart: {
    padding: 0,
  },
  adornedEnd: {
    padding: 0,
  },
  download: {
    color: 'white',
    backgroundColor: '#6122be',
    marginTop: '0.9em',
    '&:hover': {
      backgroundColor: '#5329bf',
    },
  },
});
