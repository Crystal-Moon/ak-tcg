/* eslint-disable */
import { useStyles } from './styles';
import { Grid, Container } from '@material-ui/core';
import logo from 'assets/icons/cards.png';
import Lang from 'components/Lang';
import { useTranslation } from 'react-i18next';

export function HeaderStyled(props) {
  const { t } = useTranslation();
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
              <img src={logo} className={classes.logo} />
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
