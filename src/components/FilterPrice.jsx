import React, { useState } from "react";
import classes from "./Filters.module.css";
import { TextField } from "@mui/material";
import { MenuItem } from "@mui/material";

const Prices = [
  { value: "$0 - $100" },
  { value: "$100 - $200" },
  { value: "$200 - $500" },
  { value: "$500 - $1000" },
  { value: "$1000+" },
];

const FilterPrice = () => {
  const [price, setPrice] = useState();
  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };
  return (
    <div>
      <h3>Price</h3>
      <TextField
        id="standard-select-location"
        select
        value={price}
        onChange={handleChange}
        variant="outlined"
        className={classes.search}
      >
        {Prices.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default FilterPrice;
