/* eslint-disable */
import { Grid } from '@material-ui/core';
import Lang from 'components/Lang';
import { useTranslation } from 'react-i18next';

export function HeaderStyled(props) {
  const { t } = useTranslation();
  const { handlerLang, lang } = props;

  return (
    <Grid container spacing={1}>
      <Grid item>
        <h1>{t('pages.header.title')}</h1>
      </Grid>
      <Grid item>
        <Lang />
      </Grid>
    </Grid>
  );
}
