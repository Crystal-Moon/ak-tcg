/* eslint-disable */
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';
import {
  Grid,
  Input,
  //TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  InputAdornment,
  IconButton,
  Button,
  OutlinedInput,
  InputBase,
} from '@material-ui/core';
import TextField from './TextFieldStyled';
import SelectStyled from './SelectStyled';
import AdbIcon from '@material-ui/icons/Adb';

const ELEMENTS = [
  'brutal',
  'storm',
  'fire',
  'lightning',
  'ice',
  'holy',
  'dark',
];

export function FormStyled(props) {
  const { fileName, fileTest, onChangeFile, onChangeForm, form } = props;
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
            value={form.level}
            onChange={onChangeForm}
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
            //className={}
            variant="filled"
            value={fileName}
            onChange={onChangeForm}
            readOnly
            startIcon={
              <label htmlFor="input_file">
                <Button
                  variant="text"
                  component="span"
                  color="primary"
                  //className={}
                >
                  {t('components.form.upload')}
                </Button>
              </label>
            }
            endIcon={
              fileName ? (
                <IconButton
                  variant="text"
                  component="span"
                  color="primary"
                  //className={}
                >
                  <AdbIcon></AdbIcon>
                </IconButton>
              ) : null
            }
          />
          <input
            accept=".png, .jpg, .jpeg"
            //className={classes.input}
            id="input_file"
            name="input_file"
            hidden
            type="file"
            onChange={onChangeFile}
          />
        </Grid>
      </Grid>
      <Grid item container>
        // aqui condicional si es 5 start es un select con jpg y gif
        <Button variant="contained" color="primary">
          Descargar
        </Button>
      </Grid>
      //test_img <img src={fileTest} />
    </Grid>
  );
}
