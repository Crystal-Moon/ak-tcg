/* eslint-disable */
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
  const { t } = useTranslation();
  const classes = useStyles();

  function focused(e) {
    console.log('focus');
  }

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
        <Grid item xs={10}>
          <TextField
            label="imagenn"
            id="filled-start-adornment"
            //className={}
            value={'name of file (tomado en onloead event)'}
            startIcon={
              <InputAdornment position="start">
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
              </InputAdornment>
            }
            variant="filled"
          />
          <input
            accept="image/*"
            //className={classes.input}
            id="raised-button-file"
            hidden
            type="file"
          />
        </Grid>
        <Grid container item xs={2} justifyContent="center" alignItems="center">
          <FormControl variant="outlined" margin="dense" fullWidth>
            <Button
              variant="contained"
              component="span"
              color="primary"
              className={classes.button}
            >
              Edit
            </Button>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item container></Grid>
    </Grid>
  );
}
