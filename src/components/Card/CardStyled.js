import classnames from 'classnames';
import { useStyles } from './styles';
import { ELEMENT_FILES, STAR_FILES } from 'helpers';
import Cromo from 'components/Cromo';

export function CardStyled(props) {
  const { star, title, name, element, bg_uri, level } = props.card;
  const css = useStyles();

  return (
    <div className={css.root}>
      <div className={classnames(css.capa, css.bg)}>
        <img src={bg_uri} />
      </div>
      <div className={classnames(css.capa, css.star)}>
        <img src={STAR_FILES[`_${star}`]} />
      </div>
      <div className={classnames(css.capa, css.element)}>
        <img src={ELEMENT_FILES[element]} />
      </div>
      <div className={classnames(css.capa, css.txt, css.lvl)}>{level}</div>
      <div className={classnames(css.capa, css.txt, css.title)}>{title}</div>
      <div className={classnames(css.capa, css.txt, css.name)}>{name}</div>
      {bg_uri && star === 5 && (
        <div>
          <div className={classnames(css.capa, css.cromo)}>
            <div className="shine"></div>
          </div>
          <div className={classnames(css.capa, css.hole)}>
            <Cromo image={bg_uri} />
          </div>
        </div>
      )}
    </div>
  );
}
