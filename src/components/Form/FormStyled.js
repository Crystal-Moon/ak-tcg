/* eslint-disable */
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';
import { Grid, IconButton, Button, Tooltip } from '@material-ui/core';
import TextField from './TextFieldStyled';
import SelectStyled from './SelectStyled';
import Icon from 'components/Icon';
import { ELEMENTS, makeImage } from 'helpers';
import editIcon from 'assets/icons/edit.svg';

export function FormStyled(props) {
  const {
    fileName,
    onChangeFile,
    onChangeForm,
    handlerOpenModal,
    form,
  } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <TextField
            label={t('components.form.name')}
            name="name"
            id="name"
            value={form.name}
            type="text"
            onChange={onChangeForm}
            fullWidth
            required
            error={!form.name}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            label={t('components.form.title')}
            name="title"
            id="title"
            value={form.title}
            type="text"
            onChange={onChangeForm}
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item xs={4}>
          <SelectStyled
            label={t('components.form.star')}
            id="star"
            name="star"
            items={new Array(5)
              .fill('★')
              .map((s, i) => ({ lbl: s.repeat(i + 1), val: i + 1 }))}
            value={form.star}
            onChange={onChangeForm}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label={t('components.form.level')}
            name="level"
            id="level"
            type="number"
            inputProps={{ min: 1, max: 99 }}
            value={form.level}
            onChange={onChangeForm}
            required
            error={!form.level}
            fullWidth
          />
        </Grid>

        <Grid item xs={4}>
          <SelectStyled
            label={t('components.form.element')}
            name="element"
            id="element"
            items={ELEMENTS.map(e => ({
              lbl: t(`components.elements.${e}`),
              val: e,
            }))}
            value={form.element}
            onChange={onChangeForm}
          />
        </Grid>
      </Grid>
      <Grid item container spacing={2} direction="row">
        <Grid item xs={12}>
          <TextField
            label={t('components.form.image')}
            name="fileName"
            id="fileName"
            variant="filled"
            value={fileName}
            onChange={onChangeForm}
            readOnly
            startIcon={
              <label htmlFor="input_file">
                <Button variant="text" component="span" color="primary">
                  {t('components.form.upload')}
                </Button>
              </label>
            }
            endIcon={
              fileName ? (
                <Tooltip title={t('components.form.edit')}>
                  <IconButton
                    variant=""
                    component="span"
                    color="primary"
                    onClick={handlerOpenModal}
                  >
                    <Icon src={editIcon} />
                  </IconButton>
                </Tooltip>
              ) : null
            }
          />
          <input
            accept=".png, .jpg, .jpeg"
            id="input_file"
            name="input_file"
            hidden
            type="file"
            onChange={event => {
              onChangeFile(event);
              event.target.value = '';
            }}
          />
        </Grid>
      </Grid>
      <Grid item container>
        <Button
          variant="contained"
          color="primary"
          onClick={() => makeImage(form)}
        >
          Descargar
        </Button>
      </Grid>
    </Grid>
  );
}
