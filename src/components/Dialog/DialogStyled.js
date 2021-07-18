import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';
import { Dialog, Paper, Button } from '@material-ui/core';
import load from 'assets/icons/load.gif';

export function DialogStyled(props) {
  const { t } = useTranslation();
  const { open, loading, onConfirm, onCancel, form, isGif } = props;
  const classes = useStyles();
  return (
    <Dialog open={open} keepMounted className={classes.root}>
      <Paper className={classes.paper}>
        <p>
          {t(isGif ? 'components.modal.animated' : 'components.modal.ask')}
          <hr />
          <b>{t('components.form.name')}:</b> {form.name}
          <hr />
          <b>{t('components.modal.title')}:</b> {form.title}
          <hr />
          <b>{t('components.form.level')}:</b> {form.level}
          <hr />
          <b>{t('components.form.star')}:</b> {form.star}★<hr />
          <b>{t('components.form.element')}:</b>{' '}
          {t(`components.elements.${form.element}`)}
          <hr />
        </p>
        <p>
          {loading && (
            <Button color="primary" variant="contained" className={classes.btn}>
              <img className={classes.loading} src={load} />
            </Button>
          )}
          {!loading && (
            <Button
              className={classes.btn}
              color="primary"
              variant="contained"
              onClick={onConfirm}
            >
              {t('components.form.download')}
            </Button>
          )}
          <Button
            className={classes.btn}
            color="secondary"
            variant="contained"
            onClick={onCancel}
          >
            {t('components.modal.cancel')}
          </Button>
        </p>
      </Paper>
    </Dialog>
  );
}
