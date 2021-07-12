/* eslint-disable */
import { TextField, InputAdornment } from '@material-ui/core';
export default function TextFieldStyled(props) {
  const {
    label,
    name,
    defaultValue,
    type,
    id,
    readOnly = false,
    value,
    startIcon,
    endIcon,
    onChange,
  } = props;

  return (
    <TextField
      label={label}
      id={id}
      name={name}
      //defaultValue={defaultValue}
      value={value}
      variant="outlined"
      size="small"
      margin="dense"
      type={type}
      onChange={onChange}
      fullWidth
      InputProps={{
        readOnly: readOnly,
        startAdornment: startIcon ? (
          <InputAdornment position="start">{startIcon}</InputAdornment>
        ) : null,
        endAdornment: endIcon ? (
          <InputAdornment position="end">{endIcon}</InputAdornment>
        ) : null,
      }}
    />
  );
}
