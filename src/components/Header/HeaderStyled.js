/* eslint-disable */
import { useStyles } from './styles';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';

import Lang from 'components/Lang';
import { useTranslation } from 'react-i18next';

export function HeaderStyled(props) {
  const { t } = useTranslation();
  const { handlerLang, lang } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <h1 className={classes.title}>
              <img
                src="https://www.pngitem.com/pimgs/m/138-1385757_logo-random-png-download-logo-random-png-transparent.png"
                className={classes.logo}
              />
              {t('pages.header.title')}
            </h1>
          </Grid>
          <Grid item>
            <Lang />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
