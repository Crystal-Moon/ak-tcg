/* eslint-disable */
import { useStyles } from './styles';
import {
  Grid,
  Input,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  InputAdornment,
  IconButton,
  OutlinedInput,
  InputBase,
} from '@material-ui/core';
import AdbIcon from '@material-ui/icons/Adb';
import { useTranslation } from 'react-i18next';

export function FormStyled(props) {
  const { t } = useTranslation();
  const classes = useStyles();

  function focused(e) {
    console.log('focus');
  }
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
}
