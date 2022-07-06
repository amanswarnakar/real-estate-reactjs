import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import classes from "./Filters.module.css";

const PropTypes = [
  { value: "None" },
  { value: "House/Villa" },
  { value: "Bungalow" },
  { value: "Duplex" },
  { value: "1BHK" },
  { value: "2BHK" },
  { value: "3BHK" },
  { value: "4BHK" },
];

const FilterPropType = ({propType, setPropType}) => {

  const handleChange = (event) => {
    setPropType(event.target.value);
  };

  return (
    <div>
      <h3>Property Type</h3>
      <TextField
        id="standard-select-prop-type"
        select
        value={propType}
        onChange={handleChange}
        variant="outlined"
        className={classes.search}
      >
        {PropTypes.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default FilterPropType;
