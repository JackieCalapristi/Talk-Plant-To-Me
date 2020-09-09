import React from "react";
import { Link } from '@reach/router';

import {
  CardWrapper,
  ImgWrapper,
  TextWrapper,
  StatWrapper,
  DateWrapper,
  DescriptionWrapper,
  LearnMoreWrapper,
} from "./PlantCard.styles"

const PlantCard = ({ name, image, family, scientific_name, plantId }) => (
  <CardWrapper>
    <Link to={`/${plantId}`}>
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
    </Link>
  </CardWrapper>
);

export default PlantCard;