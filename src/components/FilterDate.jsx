import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import classes from "./Filters.module.css";

export default function FilterDate() {
  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <h3>When</h3>
      <Stack>
        <DesktopDatePicker
          inputFormat="dd/MM/yyyy"
          disablePast
          className={classes.filter}
          variant="standard"
          value={value}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField className={classes.search} {...params} />
          )}
        />
      </Stack>
    </LocalizationProvider>
  );
}
