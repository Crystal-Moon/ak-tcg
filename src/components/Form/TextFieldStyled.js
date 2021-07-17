import { TextField, InputAdornment } from '@material-ui/core';
export default function TextFieldStyled(props) {
  const {
    label,
    name,
    type,
    readOnly,
    value,
    startIcon,
    endIcon,
    onChange,
    inputProps,
    required,
    error,
  } = props;

  return (
    <TextField
      label={label}
      id={`${label}_id`}
      name={name}
      value={value}
      variant="outlined"
      size="small"
      margin="dense"
      type={type}
      error={error}
      required={required}
      onChange={onChange}
      fullWidth
      inputProps={inputProps}
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
