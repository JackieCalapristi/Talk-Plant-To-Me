import React, { useState } from "react";
import {
  ALL_PLANTS_BASE_URL,
  SEARCH_BASE_URL
} from '../../config';

// Styles
import PlantCard from "./PlantCard";
import { GridWrapper, CardsWrapper } from "./PlantCard/PlantCard.styles"

//import Components
import SearchBar from "../SearchBar";

// Custom Hook
import { usePlantsFetch } from '../../hooks/usePlantsFetch' 

const Grid = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [
      {
          state: { plants, currentPage, totalPages }, 
          loading, 
          error
      }, 
      fetchPlants
  ] = usePlantsFetch(searchTerm);

  const searchPlants = search => {
      const endpoint = search 
          ? SEARCH_BASE_URL + search 
          : ALL_PLANTS_BASE_URL;
      setSearchTerm(search);
      fetchPlants(endpoint);
  }

  const loadMorePlants = () => {
      const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`;
      const popularEndpoint = `${ALL_PLANTS_BASE_URL}&page=${currentPage + 1}`;
      const endpoint =  searchTerm ? searchEndpoint : popularEndpoint;

      fetchPlants(endpoint);
  };

  // if (error) return <div>Something went wrong...</div>
  // if (!movies[0]) return <Spinner />

  // console.log(plants, error, loading);
  return (
    <div>
      <SearchBar callback={searchPlants} />
      <GridWrapper header={searchTerm ? 'Search Result' : 'Popular Movies' }>
      <CardsWrapper>
        {plants.map(plant => {
          console.log(plant)
            return (
              <PlantCard
                key={plant.id + plant.genus_id}
                clickable
                image={plant.image_url}
                name={plant.common_name}
                family={plant.family}
                scientific_name={plant.scientific_name}
              />)
          })} 
        </CardsWrapper>
    </GridWrapper>
    </div>
  )
};

export default Grid;
