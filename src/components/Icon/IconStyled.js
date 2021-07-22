import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 'auto',
    height: '1em',
    verticalAlign: 'middle',
  },
});

export function IconStyled(props) {
  const { className, title, src, alt = '' } = props;
  const classes = useStyles();
  return (
    <img
      className={classnames(classes.root, className)}
      title={title}
      src={src}
      alt={alt}
    />
  );
}
