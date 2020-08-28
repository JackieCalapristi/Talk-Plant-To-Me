import React from "react";

import {
  CardWrapper,
  ImgWrapper,
  TextWrapper,
  StatWrapper,
  DateWrapper,
  ViewWorkWrapper,
} from "./PlantCard.styles"

const PlantCard = ({ name, image }) => (
  <CardWrapper>
   {/* <a href={slug} rel="noopener noreferrer" target="_blank"> */}
   <ImgWrapper>
    <img src={image} />
    <p>Text text text</p>
   </ImgWrapper>
  
  </CardWrapper>
);

export default PlantCard;