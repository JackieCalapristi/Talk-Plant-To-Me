import React from "react";

import {
  CardWrapper,
  ImgWrapper,
  TextWrapper,
  StatWrapper,
  DateWrapper,
  DescriptionWrapper,
  LearnMoreWrapper,
} from "./PlantCard.styles"

const PlantCard = ({ name, image, family, scientific_name }) => (
  <CardWrapper>
   {/* <a href={slug} rel="noopener noreferrer" target="_blank"> */}
    <ImgWrapper>
        <img src={image} />
        <TextWrapper>
          <h6>Family: {family}</h6>
          <h1>{name}</h1>
          <DescriptionWrapper>Scientific Name: {scientific_name}</DescriptionWrapper>
          <LearnMoreWrapper>
              Learn More >
          </LearnMoreWrapper>
        </TextWrapper>
    </ImgWrapper>
  </CardWrapper>
);

export default PlantCard;