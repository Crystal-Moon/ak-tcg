/* eslint-disable */
import { FormControl, Select, InputLabel, MenuItem } from '@material-ui/core';

export default function SelectStyled(props) {
  const { label, name, id, items = [], onChange = () => {}, value } = props;
  return (
    <FormControl variant="outlined" margin="dense" fullWidth>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        id={`${id}_select`}
        name={name}
        value={value}
        onChange={onChange}
        fullWidth
        size="small"
        label="Age"
        margin="dense"
      >
        {items.map(({ lbl, val }, k) => (
          <MenuItem key={k} value={val}>
            {lbl}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
