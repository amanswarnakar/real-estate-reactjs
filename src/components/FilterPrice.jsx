import React from "react";
import classes from "./Filters.module.css";
import { TextField } from "@mui/material";
import { MenuItem } from "@mui/material";

const Prices = [
  { label: "None", value: 0 },
  { label: "₹0 - ₹5000", value: 1 },
  { label: "₹5000 - ₹10000", value: 2 },
  { label: "₹10000 - ₹50000", value: 3 },
  { label: "₹50000+", value: 4 },
];

const FilterPrice = ({ price, setPrice }) => {
  const handleChange = (event) => {
    setPrice(event.target.value);
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
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default FilterPrice;
