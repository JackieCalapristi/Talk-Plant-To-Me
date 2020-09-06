import React, { useState } from "react";
import {
  ALL_PLANTS_BASE_URL,
  SEARCH_BASE_URL,
  API_BASE_URL,
  API_KEY
} from '../../config';

// Styles
import PlantCard from "./PlantCard";
import { GridWrapper, CardsWrapper } from "./PlantCard/PlantCard.styles"

//import Components
import SearchBar from "../SearchBar";
import Spinner from "../Spinner";
import LoadMore from "../LoadMore";

// Custom Hook
import { usePlantsFetch } from '../../hooks/usePlantsFetch' 

const Grid = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [
      {
          state: { plants, currentPageUrl, nextPageUrl, lastPageUrl, totalPages }, 
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
      const searchEndpoint = `${API_BASE_URL}${currentPageUrl}${searchTerm}&token=${API_KEY}`;
      const plantsEndpoint = `${API_BASE_URL}${nextPageUrl}&token=${API_KEY}`;
      const endpoint =  searchTerm ? searchEndpoint : plantsEndpoint;
      console.log(API_BASE_URL, currentPageUrl, searchTerm, endpoint);
      fetchPlants(endpoint);
  };

  const notLastPage = () => {
    return currentPageUrl !== lastPageUrl;
  }

  if (error) return <div>Something went wrong...</div>
  if (!plants[0]) return <Spinner />

  return (
    <div>
      { console.log("endpoint", currentPageUrl, totalPages)}
      <SearchBar callback={searchPlants} />
      <GridWrapper header={searchTerm ? 'Search Result' : 'Plants' }>
        <CardsWrapper>
          {plants.map(plant => {
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
      {loading && <Spinner />}
      {notLastPage && !loading && (
          <LoadMore text="Load More" callback={loadMorePlants} />
      )}
    </div>
  )
};

export default Grid;
