import React from 'react'

// Components
import Spinner from '../Spinner'

// Styles
import { PlantPageWrapper, MetaDataWrapper } from './PlantPage.styles'

// Hooks
import { usePlantFetch } from '../../hooks/usePlantFetch'

const PlantPage = ({ plantId }) => {
  const [{ state: { plant }, loading, error }] = usePlantFetch(plantId);
  console.log("HI", plant)

  if (error) return <div>Something went wrong ...</div>;
  if (loading) return <Spinner />;

  return (
    <PlantPageWrapper> 
      <img src={plant.image_url} alt={plant.common_name} />
      <MetaDataWrapper>
        <h1>{plant.common_name}</h1>
        <h4>SCIENTIFIC INFO</h4>
        <div>{plant.genus}</div>
        <div>{plant.family}</div>
        <div>{plant.family_common_name}</div>

        <h4>OTHER PLANT INFO</h4>
        <div>{plant.edible}</div>
        <div>{plant.vegetable}</div>
      </MetaDataWrapper>
    </PlantPageWrapper>
  );
};

export default PlantPage