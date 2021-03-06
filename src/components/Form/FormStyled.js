import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Grid,
  IconButton,
  Button,
  Tooltip,
  Menu,
  MenuItem,
} from '@material-ui/core';
import classnames from 'classnames';
import { useStyles } from './styles';
import TextField from './TextFieldStyled';
import Select from './SelectStyled';
import Icon from 'components/Icon';
import Dialog from 'components/Dialog';
import { ELEMENTS, cardValidators } from 'helpers/constants';
import makeImage from 'helpers/maker';
import uploadIcon from 'assets/icons/upload.svg';
import editIcon from 'assets/icons/edit.svg';

export function FormStyled(props) {
  const {
    isSm,
    fileName,
    onChangeFile,
    onChangeForm,
    handlerOpenModal,
    form,
  } = props;
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dialog, setDialog] = useState();
  const [isGif, setIsGif] = useState();
  const classes = useStyles();

  const openMenu = event => setAnchorEl(event.currentTarget);
  const closeMenu = () => setAnchorEl(null);
  const openDialog = () => setDialog(true);
  const closeDialog = () => setDialog(false);

  function handlerDownload(_isGif) {
    const failField = validateForm();
    if (failField) return alert(t(`components.form.alert.${failField}`));

    setIsGif(_isGif);
    closeMenu();
    openDialog();
  }

  function validateForm() {
    const trim = v => String(v).replace(/[ ]+/g, ' ').trim();
    for (const k in form) {
      if (cardValidators[k] && !cardValidators[k](trim(form[k]))) return k;
    }
  }

  function downloadImage() {
    makeImage(form);
    closeDialog();
  }

  function downloadGif() {
    setLoading(true);
    makeImage(form, () => {
      closeDialog();
      setLoading(false);
    });
  }

  return (
    <div>
      <Dialog
        open={dialog}
        form={form}
        isGif={isGif}
        loading={loading}
        onConfirm={isGif ? downloadGif : downloadImage}
        onCancel={closeDialog}
      />

      <Grid container direction="column" spacing={1}>
        <Grid item container spacing={1} alignItems="center">
          <Grid item xs={12} sm={4}>
            <TextField
              label={t('components.form.name')}
              name="name"
              value={form.name}
              onChange={onChangeForm}
              error={!form.name}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              label={t('components.form.title')}
              name="title"
              value={form.title}
              onChange={onChangeForm}
            />
          </Grid>
        </Grid>
        <Grid item container spacing={1}>
          <Grid item xs={12} sm={4}>
            <Select
              label={t('components.form.star')}
              name="star"
              items={new Array(5)
                .fill('???')
                .map((s, i) => ({ lbl: s.repeat(i + 1), val: i + 1 }))}
              value={form.star}
              onChange={onChangeForm}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label={t('components.form.level')}
              name="level"
              type="number"
              inputProps={{ min: 1, max: 99 }}
              value={form.level}
              onChange={onChangeForm}
              required
              error={!form.level}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <Select
              label={t('components.form.element')}
              name="element"
              items={ELEMENTS.map(e => ({
                lbl: t(`components.elements.${e}`),
                val: e,
              }))}
              value={form.element}
              onChange={onChangeForm}
            />
          </Grid>
        </Grid>
        <Grid item container spacing={1} direction="row">
          <Grid item xs={12}>
            <TextField
              label={t('components.form.image')}
              name="fileName"
              value={fileName}
              onChange={onChangeForm}
              classes={{
                adornedStart: classes.adornedStart,
                adornedEnd: classes.adornedEnd,
              }}
              readOnly
              startIcon={
                <label htmlFor="input_file">
                  {!isSm ? (
                    <Button
                      variant="contained"
                      component="span"
                      className={classes.btnInput}
                    >
                      {t('components.form.upload')}
                    </Button>
                  ) : (
                    <IconButton
                      component="span"
                      className={classnames(classes.btnInput, classes.btnEdit)}
                    >
                      <Icon src={uploadIcon} />
                    </IconButton>
                  )}
                </label>
              }
              endIcon={
                fileName ? (
                  <Tooltip title={t('components.form.edit')}>
                    <IconButton
                      onClick={handlerOpenModal}
                      className={classnames(classes.btnInput, classes.btnEdit)}
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
        <Grid item container justifyContent="center">
          {form.star == 5 ? (
            <div>
              <Button
                variant="contained"
                onClick={openMenu}
                className={classes.download}
              >
                {t('components.form.download')}
              </Button>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={closeMenu}
              >
                <MenuItem onClick={() => handlerDownload()}>
                  {t('components.form.jpg')}
                </MenuItem>
                <MenuItem onClick={() => handlerDownload(true)}>
                  {t('components.form.gif')}
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => handlerDownload()}
              className={classes.download}
            >
              {t('components.form.download')}
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
