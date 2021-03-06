import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTranslation } from 'react-i18next';
import { Grid, Container } from '@material-ui/core';
import { useStyles } from './styles';
import Icon from 'components/Icon';

export function FooterStyled() {
  const { t } = useTranslation();
  const isSm = useMediaQuery('(max-width:600px)');
  const classes = useStyles({ isSm });
  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.footer}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <p>{t('pages.footer.aeria')}</p>
            <p>
              {t('pages.footer.lucro')}{' '}
              <a href="https://www.aurakingdom-db.com" target="_blank">
                aurakingdom-db.com
              </a>
            </p>
          </Grid>
          <Grid item container justifyContent="space-between">
            <Grid
              item
              alignContent="center"
              className={classes.contadorContainer}
            >
              <span>{t('pages.footer.visits')}:</span>
              <div
                id="sfc1gfkg1zmqcpslxhpulylektsd4c4r21r"
                className={classes.contador}
              >
                <a
                  href="https://www.contadorvisitasgratis.com/geozoom.php?c=1gfkg1zmqcpslxhpulylektsd4c4r21r&base=counter5&type_clic=1"
                  title="contadorvisitasgratis"
                >
                  <img
                    style={{ height: 26, width: 104 }}
                    src="https://counter5.stat.ovh/private/contadorvisitasgratis.php?c=1gfkg1zmqcpslxhpulylektsd4c4r21r"
                    border="0"
                    title="contadorvisitasgratis"
                    alt="contadorvisitasgratis"
                  />
                </a>
              </div>
              <span>{t('pages.footer.thank')} &#128156;!</span>
            </Grid>
            <Grid item className={classes.contadorContainer}>
              <p>
                {t('pages.footer.projects')}:{' '}
                <a
                  href="https://crystal-moon.github.io/eidolon-exp/"
                  target="_blank"
                >
                  [{t('pages.footer.calculator')}]
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
          <Grid
            item
            container
            xs={12}
            sm={6}
            justifyContent={isSm ? 'center' : 'flex-start'}
          >
            <span>Made with &#10084; by</span>
            <div className={classes.CM_logo}>
              <Icon
                src="https://imgur.com/YBC1K87.png"
                alt="CrystalMoon"
                title="CrystalMoon"
              />
              <span>CrystalMoon [AKES]</span>
            </div>
            <div>
              <Icon
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/320px-Flag_of_Argentina.svg.png"
                alt="arg"
                title="Argentina"
              />
              <span>2021</span>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            container
            justifyContent={isSm ? 'center' : 'flex-end'}
          >
            <span>Powered by</span>
            <div>
              <Icon
                src="https://imgur.com/SkcRcfF.png"
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
