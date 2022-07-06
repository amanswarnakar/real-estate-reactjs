import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import classes from "./Filters.module.css";
const Locations = [
  { value: "None" },
  { value: "Bengaluru" },
  { value: "Chennai" },
  { value: "Delhi" },
  { value: "Hyderabad" },
  { value: "Kolkata" },
  { value: "Mumbai" },
  { value: "Pune" },
];
const FilterLocation = ({ location, setLocation }) => {
  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div>
      <h3>Location</h3>
      <TextField
        id="standard-select-location"
        select
        value={location}
        onChange={handleChange}
        variant="outlined"
        className={classes.search}
      >
        {Locations.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default FilterLocation;
