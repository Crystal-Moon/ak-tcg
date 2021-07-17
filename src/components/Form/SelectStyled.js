import { FormControl, Select, InputLabel, MenuItem } from '@material-ui/core';

export default function SelectStyled(props) {
  const { label, name, items = [], onChange, value } = props;
  return (
    <FormControl variant="outlined" margin="dense" fullWidth>
      <InputLabel id={`${label}_lbl`}>{label}</InputLabel>
      <Select
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        fullWidth
        size="small"
        margin="dense"
        labelId={`${label}_lbl`}
        id={`${label}_select`}
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
