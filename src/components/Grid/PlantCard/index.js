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
        {/* <h6>{subtitle}</h6> */}
        <img src={image} />
        <h2>{name}</h2>
        <ViewWorkWrapper>
          View Work >
        </ViewWorkWrapper>
      </ImgWrapper>
    {/* </a> */}
    <TextWrapper>
      <StatWrapper>
        <DateWrapper>
          {/* <img src={DateIcon} alt="Date icon" /> */}
          {/* {date} */}
        </DateWrapper>
      </StatWrapper>
      {/* <p>{excerpt}</p> */}
    </TextWrapper>
  </CardWrapper>
);

export default PlantCard;