import React, { useState } from "react";
import {
  ALL_PLANTS_BASE_URL,
  SEARCH_BASE_URL,
  API_BASE_URL,
  API_KEY
} from '../../config';

// Styles
import PlantCard from "./PlantCard";
import { SearchResultsWrapper } from "./Grid.styles"
import { CardsWrapper } from "./PlantCard/PlantCard.styles"

//import Components
import SearchBar from "../SearchBar";
import Spinner from "../Spinner";
import LoadMore from "../LoadMore";

// Custom Hook
import { usePlantsFetch } from '../../hooks/usePlantsFetch' 

const Grid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [
      {
          state: { 
            plants, 
            firstPageUrl, 
            nextPageUrl, 
            lastPageUrl,
            totalResults,
            totalPages
          }, 
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
      const searchEndpoint = `${API_BASE_URL}${firstPageUrl}${searchTerm}&token=${API_KEY}`;
      const plantsEndpoint = `${API_BASE_URL}${nextPageUrl}&token=${API_KEY}`;
      const endpoint =  searchTerm ? searchEndpoint : plantsEndpoint;
      fetchPlants(endpoint);
  };

  const isLastPage = () => {
    //I know, I hate this, too. 
    return typeof nextPageUrl === "undefined";
  }

  if (error) return <div>Something went wrong...</div>
  if (!plants[0]) return <Spinner />

  return (
    <div>
      <SearchBar callback={searchPlants} />
      <SearchResultsWrapper>
        <div>{searchTerm ? 'Search Results ' : 'All Plants ' }</div>
        <span role="img">&nbsp; 🍃 &nbsp;</span>
        <div>{totalResults.toLocaleString()} results</div>
      </SearchResultsWrapper>
      <div>
        <CardsWrapper>
          {plants.map(plant => {
              if (plant !== undefined) {
                return (
                  <PlantCard
                    key={plant.id}
                    plantId={plant.id}
                    clickable
                    image={plant.image_url}
                    name={plant.common_name}
                    family={plant.family}
                    scientific_name={plant.scientific_name}
                  />)
              }
            })} 
          </CardsWrapper>
      </div>
      {loading && <Spinner />}
      {!isLastPage() && !loading && (
          <LoadMore text="Load More" callback={loadMorePlants} />
      )}
    </div>
  )
};

export default Grid;
