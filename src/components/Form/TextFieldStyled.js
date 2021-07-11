/* eslint-disable */
import { TextField } from '@material-ui/core';
export default function TextFieldStyled(props) {
  const { label, defaultValue, type, id, readOnly = false, value } = props;

  return (
    <TextField
      label={label}
      id={id}
      //defaultValue={defaultValue}
      value={value}
      variant="outlined"
      size="small"
      margin="dense"
      type={type}
      fullWidth
      InputProps={{
        readOnly: readOnly,
      }}
    />
  );
}
