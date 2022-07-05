import React from "react";
import { Button, Link } from "@mui/material";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.left}>
        <div className={classes.companyName}>Real Estate</div>
        <div className={classes.navItems}>
          <Link className={[classes.link, classes.active].join(" ")}>Rent</Link>
          <Link className={classes.link}>Buy</Link>
          <Link className={classes.link}>Sell</Link>
          <Link className={classes.link}>Manage Property</Link>
          <Link className={classes.link}>Resources</Link>
        </div>
      </div>
      <div className={classes.auth}>
        <Button className={classes.authButton} variant="outlined">
          Login
        </Button>
        <Button className={classes.authButton} variant="contained">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
