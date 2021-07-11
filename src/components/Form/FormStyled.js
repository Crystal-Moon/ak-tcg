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
          <FormControl variant="outlined" margin="dense" fullWidth>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item justifyContent="center" alignItems="center">
                <input
                  accept="image/*"
                  //className={classes.input}
                  //style={{ display: 'none' }}
                  id="raised-button-file"
                  hidden
                  type="file"
                />
                <label htmlFor="raised-button-file">
                  <Button
                    variant="contained"
                    component="span"
                    color="primary"
                    className={classes.button}
                  >
                    Upload
                  </Button>
                </label>
              </Grid>
              <Grid item xs={10}>
                <TextField label="myFile1" id="myFile1" type="text" readOnly />
              </Grid>
            </Grid>
          </FormControl>
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
  /*
  return (
    <div>
      <TextField
        label="Size"
        id="outlined-size-normal"
        defaultValue="Normal"
        variant="outlined"
        size="small"
        margin="dense"
        type="number"
        fullWidth
      />
      <TextField
        label="Size"
        id="outlined-size-normal"
        defaultValue="Normal"
        variant="outlined"
        size="small"
        margin="dense"
        type="number"
        fullWidth
      />
      <FormControl variant="outlined" className={classes.formControl} fullWidth>
        <InputLabel id="demo-simple-select-outlined-label">lvl</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={10}
          onChange={() => {}}
          fullWidth
          size="small"
          label="Age"
          margin="dense"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Size"
        id="outlined-size-normal"
        defaultValue="Normal"
        variant="outlined"
        size="small"
        margin="dense"
        fullWidth
        endAdornment={<InputAdornment position="start">$</InputAdornment>}
      />

      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={1234}
          onChange={() => {}}
          margin="dense"
          startAdornment={
            <InputAdornment position="start">
              <AdbIcon></AdbIcon>
            </InputAdornment>
          }
          // labelWidth={60}
        />
      </FormControl>

      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outl"></InputLabel>
        <Input
          //className="MuiInputLabel-animated MuiInputLabel-outlined"
          label="somme"
          endAdornment={<AdbIcon></AdbIcon>}
          id="outl"
          onChange={() => {}}
          margin="dense"
          variant="outlined"
          fullWidth
          onFocus={focused}
        />
      </FormControl>
    </div>
  );
  */
}
