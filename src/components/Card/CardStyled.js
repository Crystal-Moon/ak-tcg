/* eslint-disable */
import classnames from 'classnames';
import { useStyles } from './styles';
import { Grid, Container } from '@material-ui/core';
import logo from 'assets/icons/cards.png';
import Lang from 'components/Lang';
import { useTranslation } from 'react-i18next';
import star_1 from 'assets/imgs/macro_1.png';
import e_dark from 'assets/imgs/e_dark.png';

export function CardStyled(props) {
  const { t } = useTranslation();
  const {
    star,
    title,
    name = 'CrystalMoon',
    element,
    bg_img,
    lvl = 99,
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classnames(classes.capa, classes.bg)}></div>
      <div className={classnames(classes.capa, classes.star)}>
        <img src={star_1} />
      </div>
      <div className={classnames(classes.capa, classes.element)}>
        <img src={e_dark} />
      </div>
      <div className={classnames(classes.capa, classes.txt, classes.lvl)}>
        {lvl}
      </div>
      <div className={classnames(classes.capa, classes.txt, classes.title)}>
        {title || t('components.cardTitle')}
      </div>
      <div className={classnames(classes.capa, classes.txt, classes.name)}>
        {name || t('components.cardName')}
      </div>
    </div>
  );
}
