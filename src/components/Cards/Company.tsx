import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Company() {
  const [age, setAge] = React.useState<string | number>('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent<typeof age>) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 170 }}>
        <InputLabel id="demo-controlled-open-select-label">Company</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Company"
          onChange={handleChange}
        >
          <MenuItem value={11}>Nike</MenuItem>
          <MenuItem value={12}>Adidas</MenuItem>
          <MenuItem value={13}>Puma</MenuItem>
          <MenuItem value={14}>New Balance</MenuItem>
          <MenuItem value={15}>Vans</MenuItem>
          <MenuItem value={16}>Converse</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
