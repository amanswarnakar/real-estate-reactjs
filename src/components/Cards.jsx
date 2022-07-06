import React from "react";
import Card from "./Card";
import classes from "./Cards.module.css";
import Data from "../data/Data";

const Cards = ({
  location,
  price,
  propType,
  onLocationFilter,
  onPriceFilter,
  onPropTypeFilter,
}) => {
  let data = [...Data];
  data = Data.filter((obj) => obj.address === location);

  return (  
    <div className={classes.container}>
      {data.map((obj) => (
        <Card
          imgScr={obj.imgScr}
          imgAlt={obj.imgAlt}
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
  );
};

export default Cards;
