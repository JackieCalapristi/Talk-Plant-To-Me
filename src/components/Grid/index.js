import React from "react";

// Styles
import { CardsWrapper, CardWrapper } from "./Grid.styles"

const Grid = ({ children }) => {
  const fakePlants = [
    {id: 1, name: "Rosemary"},
    {id: 2, name: "Basil"}
  ];

  return (
  <CardsWrapper>
    {fakePlants.map(
      plant => 
        <CardWrapper key={plant.id} title={plant.name} />
    )}
  </CardsWrapper>)
};

export default Grid;
