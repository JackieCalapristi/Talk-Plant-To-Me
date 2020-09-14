import React from "react";
import { Link } from '@reach/router';

// Images
import NoImage from "../../../images/NoImage.png"

import {
  CardWrapper,
  ImgWrapper,
  TextWrapper,
  DescriptionWrapper,
  LearnMoreWrapper,
} from "./PlantCard.styles"

const PlantCard = ({ name, image, family, scientific_name, plantId }) => (
  <CardWrapper>
    <Link to={`/${plantId}`}>
      <ImgWrapper>
        <img src={image !== null ? image : NoImage} alt={name} />
        <TextWrapper>
          <h6>Family: {family}</h6>
          <h1>{name}</h1>
          <DescriptionWrapper>{scientific_name}</DescriptionWrapper>
          <LearnMoreWrapper>
              Learn More >
          </LearnMoreWrapper>
        </TextWrapper>
      </ImgWrapper>
    </Link>
  </CardWrapper>
);

export default PlantCard;