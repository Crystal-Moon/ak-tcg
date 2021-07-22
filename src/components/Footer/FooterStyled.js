/* eslint-disable */
import { useTranslation } from 'react-i18next';
import { Grid, Container } from '@material-ui/core';
import { useStyles } from './styles';
import Icon from 'components/Icon';

export function FooterStyled(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.footer}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <p>{t('pages.footer.aeria')}</p>
            <p>
              {t('pages.footer.lucro')}{' '}
              <a href="https://www.aurakingdom-db.com">aurakingdom-db.com</a>
            </p>
          </Grid>
          <Grid item container justifyContent="space-between">
            <Grid item alignContent="center">
              <div className={classes.contadorContainer}>
                <span>{t('pages.footer.visits')}:</span>
                <div
                  id="sfckj3hrfmdd23u7s48fyuxp1ajsj1eg5me"
                  className={classes.contador}
                >
                  <img style={{ height: 26, width: 104 }} />
                </div>
                <span>{t('pages.footer.thank')} &#128156;!</span>
              </div>
            </Grid>
            <Grid item className={classes.contadorContainer}>
              <p>
                {t('pages.footer.projects')}:{' '}
                <a
                  href="https://crystal-moon.github.io/eidolon-exp/"
                  target="_blank"
                >
                  [{t('pages.footer.calculator')}]
                </a>{' '}
                <a
                  href="https://crystal-moon.github.io/royal-battle-ak/"
                  target="_blank"
                >
                  [{t('pages.footer.desafio')}]
                </a>
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.sign}>
        <Grid
          container
          spacing={1}
          justifyContent="space-between"
          direction="row"
        >
          <Grid item container xs={6}>
            <span>Made with ♥ by</span>
            <div className={classes.CM_logo}>
              <Icon
                src="https://imgur.com/YBC1K87.png"
                alt="CrystalMoon"
                title="CrystalMoon"
              />
              <span>CrystaIMoon [AKES]</span>
            </div>
            <div>
              <Icon
                src="https://restcountries.eu/data/arg.svg"
                alt="Argentina"
                title="Argentina"
              />
              <span>2021</span>
            </div>
          </Grid>
          <Grid item xs={6} container justifyContent="flex-end">
            <span>Powered by</span>
            <div>
              <Icon
                src="https://imgur.com/7bn2gQY.png"
                alt="ReactJS"
                title="ReactJS"
              />
              <Icon
                src="https://img.icons8.com/color/452/material-ui.png"
                alt="Material-UI"
                title="Material-UI"
              />
              <Icon
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFSIO_dsJJiOX3Sntwxpw6lUIJKI0ueBlRpcQ3q57xVOw4-bCAQ2eX0v_5v2sf5CIiNA&usqp=CAU"
                alt="GitHub"
                title="GitHub"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
