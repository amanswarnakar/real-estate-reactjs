import React from "react";
import FilterDate from "./FilterDate";
import FilterLocation from "./FilterLocation";
import FilterPropType from "./FilterPropType";
import FilterPrice from "./FilterPrice";
import classes from "./Filters.module.css";
import { Button } from "@mui/material";

const Filters = () => {
  return (
    <div className={classes.filters}>
      <div className={classes.filter}>
        <FilterLocation />
      </div>
      <div className={classes.filter}>
        <FilterDate />
      </div>
      <div className={classes.filter}>
        <FilterPrice />
      </div>
      <div className={classes.filter}>
        <FilterPropType />
      </div>
      <div className={classes.filterButton}>
        <Button variant="contained">Search</Button>
      </div>
    </div>
  );
};

export default Filters;
