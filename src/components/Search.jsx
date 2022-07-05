import React from "react";
import TextField from "@mui/material/TextField";
import classes from "./Search.module.css";

const Search = () => {
  return (
    <div className={classes.search}>
      <h1>Search properties to rent</h1>
      <TextField id="outlined-basic" className={classes.searchBar} label="Search" variant="outlined" />
    </div>
  );
};

export default Search;
