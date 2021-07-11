/* eslint-disable */
import { FormControl, Select, InputLabel, MenuItem } from '@material-ui/core';

export default function SelectStyled(props) {
  const { label, id, items = [], onChange = () => {}, value } = props;
  return (
    <FormControl variant="outlined" margin="dense" fullWidth>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        id={id}
        value={value}
        //onChange={onChange}
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
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
