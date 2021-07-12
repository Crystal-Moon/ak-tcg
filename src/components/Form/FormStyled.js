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

export function FormStyled(props) {
  const { fileName, fileTest, onChangeFile } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <TextField
            label="Size"
            id="outlined-size-normal"
            type="text"
            fullWidth
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            label="Size"
            id="outlined-size-normal"
            type="text"
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item xs={4}>
          <SelectStyled label={'levell'} id={'some_id'} items={[]} value={10} />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="numero"
            id="outlined-size-normal"
            type="number"
            fullWidth
          />
        </Grid>

        <Grid item xs={4}>
          <SelectStyled
            label={'levell2'}
            id={'some_id2'}
            items={[]}
            value={10}
          />
        </Grid>
      </Grid>
      <Grid item container spacing={2} direction="row">
        <Grid item xs={12}>
          <TextField
            label="imagenn"
            id="filled-start-adornment"
            //className={}
            variant="filled"
            value={fileName}
            readOnly
            startIcon={
              <label htmlFor="raised-button-file">
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
            id="raised-button-file"
            name="raised-button-file"
            hidden
            type="file"
            onLoad={() => {}}
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
