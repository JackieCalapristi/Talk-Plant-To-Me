import React from "react";

import {
  CardWrapper,
  ImgWrapper,
  TextWrapper,
  StatWrapper,
  DateWrapper,
  SeePlantWrapper,
} from "./PlantCard.styles"

const PlantCard = ({ name, image, family, scientific_name }) => (
  <CardWrapper>
   {/* <a href={slug} rel="noopener noreferrer" target="_blank"> */}
    <ImgWrapper>
        <img src={image} />
        <TextWrapper>
          <div>Family: {family}</div>
          <h1>{name}</h1>
          <div>Scientific Name: {scientific_name}</div>
          <SeePlantWrapper>
              See Plant >
          </SeePlantWrapper>
        </TextWrapper>
    </ImgWrapper>
  </CardWrapper>
);

export default PlantCard;