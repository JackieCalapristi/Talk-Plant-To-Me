import React, { useState } from "react";
import {
  ALL_PLANTS_BASE_URL,
  SEARCH_BASE_URL
} from '../../config';

// Styles
import PlantCard from "./PlantCard";
import { GridWrapper, CardsWrapper } from "./PlantCard/PlantCard.styles"

//import Components
// import HeroImage from './elements/HeroImage'
// import SearchBar from './elements/SearchBar'
// import Grid from './elements/Grid'
// import MovieThumb from './elements/MovieThumb'
// import LoadMoreButton from './elements/LoadMoreButton'
// import Spinner from './elements/Spinner'

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
      const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

      fetchPlants(endpoint);
  };

  // if (error) return <div>Something went wrong...</div>
  // if (!movies[0]) return <Spinner />

  // console.log(plants, error, loading);
  return (
    <GridWrapper header={searchTerm ? 'Search Result' : 'Popular Movies' }>
      <CardsWrapper>
        {plants.map(plant => {
            console.log(plant)

            return (
              <PlantCard
                key={plant.id}
                clickable
                image={plant.image_url}
                name={plant.common_name}
                // plantId={plant.id}
              />)
          })} 
        </CardsWrapper>
    </GridWrapper>
  )
};

export default Grid;
