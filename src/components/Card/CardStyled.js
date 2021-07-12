/* eslint-disable */
import classnames from 'classnames';
import { useStyles } from './styles';
import { useTranslation } from 'react-i18next';
import { ELEMENT_FILES } from 'helpers';
import { STAR_FILES } from 'helpers';

export function CardStyled(props) {
  const { t } = useTranslation();
  const { star, title, name, element, bg_uri, level } = props.card;
  const classes = useStyles();
  // bart https://www.pngkey.com/png/full/23-230623_lisa-simpson-vaporwave-crying-random-wallpaper-bart-simpson.png

  return (
    <div className={classes.root}>
      <div className={classnames(classes.capa, classes.bg)}>
        <img src={bg_uri} />
      </div>
      <div className={classnames(classes.capa, classes.star)}>
        <img src={STAR_FILES[`_${star}`]} />
      </div>
      <div className={classnames(classes.capa, classes.element)}>
        <img src={ELEMENT_FILES[element]} />
      </div>
      <div className={classnames(classes.capa, classes.txt, classes.lvl)}>
        {level}
      </div>
      <div className={classnames(classes.capa, classes.txt, classes.title)}>
        {title || t('components.card.title')}
      </div>
      <div className={classnames(classes.capa, classes.txt, classes.name)}>
        {name || t('components.card.name')}
      </div>
    </div>
  );
}
