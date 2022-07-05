import React from "react";
import Card from "./Card";
import classes from "./Cards.module.css";

const Cards = () => {
  return (
    <div className={classes.container}>
      <Card
        imgScr="https://images.unsplash.com/photo-1656956172812-1ad9abaeaeda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        imgAlt="house"
        price="300"
        name="Aman"
        address="Dighi Hills"
        bedNum="3"
        bathNum="2"
        area="6*7.5"
      ></Card>
    </div>
  );
};

export default Cards;
