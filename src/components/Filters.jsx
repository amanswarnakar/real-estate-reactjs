import React, { useState, useEffect } from "react";
import FilterDate from "./FilterDate";
import FilterLocation from "./FilterLocation";
import FilterPropType from "./FilterPropType";
import FilterPrice from "./FilterPrice";
import classes from "./Filters.module.css";
import { Button } from "@mui/material";
import Data from "../data/Data";
import Card from "./Card";

const Filters = () => {
  // const [data, setData] = useState([...Data]);
  let data = [...Data];
  // let arr = [];
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [propType, setPropType] = useState("");
  // const [a, setA] = useState(false);

  // useEffect(() => {
  //   if (location !== "" && location !== "None") {
  //     arr = data.filter((obj) => obj.address === location);
  //   }
  //   if (propType !== "" && propType !== "None") {
  //     arr = data.filter((obj) => obj.propType === propType);
  //   }
  //   if (price !== "" && price !== "None") {
  //     if (price === 1) {
  //       arr = data.filter((obj) => obj.price <= 2000);
  //     } else if (price === 2) {
  //       arr = data.filter((obj) => obj.price > 2000 && obj.price <= 5000);
  //     } else if (price === 3) {
  //       arr = data.filter((obj) => obj.price > 5000 && obj.price <= 10000);
  //     } else if (price === 4) {
  //       arr = data.filter((obj) => obj.price > 10000 && obj.price <= 50000);
  //     } else if (price === 5) {
  //       arr = data.filter((obj) => obj.price > 50000);
  //     }
  //   }
  // }, [location, price, propType]);

  if (location !== "" && location !== "None") {
    data = data.filter((obj) => obj.address === location);
  }
  if (propType !== "" && propType !== "None") {
    data = data.filter((obj) => obj.propType === propType);
  }
  if (price !== "" && price !== "None") {
    if (price === 1) {
      data = data.filter((obj) => obj.price <= 2000);
    } else if (price === 2) {
      data = data.filter((obj) => obj.price > 2000 && obj.price <= 5000);
    } else if (price === 3) {
      data = data.filter((obj) => obj.price > 5000 && obj.price <= 10000);
    } else if (price === 4) {
      data = data.filter((obj) => obj.price > 10000 && obj.price <= 50000);
    } else if (price === 5) {
      data = data.filter((obj) => obj.price > 50000);
    }
  }

  const handleChange = (e) => {
    console.log(data);
    e.preventDefault();
  };
  return (
    <div>
      <div className={classes.filters}>
        <div className={classes.filter}>
          <FilterLocation location={location} setLocation={setLocation} />
        </div>
        <div className={classes.filter}>
          <FilterDate />
        </div>
        <div className={classes.filter}>
          <FilterPrice price={price} setPrice={setPrice} />
        </div>
        <div className={classes.filter}>
          <FilterPropType propType={propType} setPropType={setPropType} />
        </div>
        <div className={classes.filterButton}>
          <Button onClick={handleChange} variant="contained">
            Search
          </Button>
        </div>
      </div>
      <div className={classes.container}>
        {console.log(data)}
        {data.map((obj, idx) => (
          <Card
            key={idx}
            imgScr={obj.imgScr}
            imgAlt={obj.propType}
            price={obj.price}
            name={obj.name}
            address={obj.address}
            bedNum={obj.bedNum}
            bathNum={obj.bathNum}
            area={obj.area}
            isPopular={obj.isPopular}
          />
        ))}
      </div>
    </div>
  );
};

export default Filters;
