import React, { useState } from "react";
import {
  ALL_PLANTS_BASE_URL,
  SEARCH_BASE_URL
} from '../../config';

// Styles
import { CardsWrapper, CardWrapper } from "./Grid.styles"

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
  const fakePlants = [
    {id: 1, name: "Rosemary"},
    {id: 2, name: "Basil"}
  ];

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
    <CardsWrapper header={searchTerm ? 'Search Result' : 'Popular Movies' }>
      {/* {fakePlants.map(
        plant => 
        <CardWrapper key={plant.id} name={plant.name}>{plant.name}</CardWrapper>
      )} */}
    

      {plants.map(plant => {
        return (
          <CardWrapper
            key={plant.id}
            clickable
            // image={
            //     movie.poster_path 
            //         ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            //         :  NoImage
            // }
            // plantId={plant.id}
            // plantName={plant.original_title}
        />)
      })} 
    </CardsWrapper>
  )
};

export default Grid;
