import React from "react";
import classes from "./Card.module.css";
import Checkbox from "@mui/material/Checkbox";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.top}>
        <img src={props.imgScr} alt={props.imgAlt} />
        <span>Popular</span>
      </div>
      <div className={classes.bottom}>
        <div className={classes.priceCol}>
          <span>
            <span className={classes.price}>${props.price}</span>
            /month
          </span>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </div>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.address}>{props.address}</div>
        <div className={classes.footer}>
          <span><BedIcon></BedIcon> {props.bedNum} Beds</span>
          <span><BathtubIcon></BathtubIcon> {props.bathNum} Bathrooms</span>
          <span><ViewComfyIcon></ViewComfyIcon> {props.area} sq. m</span>
        </div>
      </div>
    </div>
    
  );
};

export default Card;
