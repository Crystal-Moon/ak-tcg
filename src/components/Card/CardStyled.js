import classnames from 'classnames';
import { useStyles } from './styles';
import { getElementFile, getStarFile } from 'helpers';
import Hole from 'components/Hole';

export function CardStyled(props) {
  const { star, title, name, element, bg_uri, level } = props.card;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classnames(classes.capa, classes.bg)}>
        <img src={bg_uri} />
      </div>
      <div className={classnames(classes.capa, classes.star)}>
        <img src={getStarFile(star)} />
      </div>
      <div className={classnames(classes.capa, classes.element)}>
        <img src={getElementFile(element)} />
      </div>
      <div className={classnames(classes.capa, classes.txt, classes.lvl)}>
        {level}
      </div>
      <div className={classnames(classes.capa, classes.txt, classes.title)}>
        {title}
      </div>
      <div className={classnames(classes.capa, classes.txt, classes.name)}>
        {name}
      </div>
      {bg_uri && star === 5 && (
        <div>
          <div className={classnames(classes.capa, classes.cromo)}></div>
          <div className={classnames(classes.capa, classes.hole)}>
            <Hole image={bg_uri} />
          </div>
        </div>
      )}
    </div>
  );
}
