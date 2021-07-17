import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 'auto',
    height: '1em',
  },
});

export function IconStyled(props) {
  const { className, title, src } = props;
  const classes = useStyles();
  return (
    <img
      className={classnames(classes.root, className)}
      title={title}
      src={src}
    />
  );
}
