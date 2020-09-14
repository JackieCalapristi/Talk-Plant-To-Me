import React from 'react'

// Components
import Spinner from '../Spinner'

// Images
import NoImage from "../../images/NoImage.png"

// Styles
import { 
  PlantPageWrapper,
  BlockWrapperMain, 
  BlocksWrapper, 
  BlockWrapper, 
  ImageTextWrapper,
  Title 
} from './PlantPage.styles'

// Hooks
import { usePlantFetch } from '../../hooks/usePlantFetch'

const PlantPage = ({ plantId }) => {
  const [{ state: { plant }, loading, error }] = usePlantFetch(plantId);

  console.log(plant)
  if (error) return <div>Something went wrong ...</div>;
  if (loading) return <Spinner />;

  return (
    <PlantPageWrapper> 
      <ImageTextWrapper>
        <div>
          <img src={plant.image_url !== null ? plant.image_url : NoImage} alt={plant.common_name} />
        </div>
        <BlockWrapperMain>
          <Title>{plant.common_name}</Title>
          <div>Genus: {plant.genus}</div>
          <div>Family: { plant.family_common_name !== (undefined || null) ? plant.family_common_name : plant.family } </div>
        </BlockWrapperMain>
      </ImageTextWrapper>
      <BlocksWrapper>
        <BlockWrapper>
          <h4>PLANT CARE</h4>
          <div>Best months for growth: {plant.growth.growth_months === null ? "Unknown" : plant.growth.growth_months}</div>
          <div>Best months for bloom: {plant.growth.bloom_months === null ? "Unknown" : plant.growth.bloom_months.join(', ')}</div>
          <div>Required Light: {plant.growth.light === null ? "Unknown" : plant.growth.light + " Lux"}</div>
          <div>Max Temperture: {plant.growth.maximum_temperature.deg_c === null ? "Unknown" : plant.growth.maximum_temperature.deg_c + " Celcius"}</div>
          <div>Min Temperture: {plant.growth.minimum_temperature.deg_c === null ? "Unknown" : plant.growth.minimum_temperature.deg_c + " Celcius"}</div>
          <div>Max Soil PH: {plant.growth.ph_maximum === null ? "Unknown" : plant.growth.ph_maximum }</div>
          <div>Min Soil PH: {plant.growth.ph_minimum === null ? "Unknown" : plant.growth.ph_minimum }</div>
          <div>Required air humidity: {plant.growth.atmospheric_humidity === null ? "Unknown" : plant.growth.atmospheric_humidity} </div>
          <div>Required soil humidity: {plant.growth.soil_humidity === null ? "Unknown" : plant.growth.soil_humidity} </div>
        </BlockWrapper>

        <BlockWrapper>
          <h4>PLANT SPECS</h4>
          {/* <div>{plant.edible === undefined ? "Unknown" : plant.edible ? "Is " : "Not " } edible</div> */}
          <div>{plant.vegetable === undefined ? "Unknown" : plant.vegetable ? "Is a " : "Not a "} vegetable</div>
          <div>Average Height: {plant.specifications.average_height.cm === null ? "Unknown" : plant.specifications.average_height.cm + " cm"}</div>
          <div>Maximum Height: {plant.specifications.maximum_height.cm === null ? "Unknown" : plant.specifications.maximum_height.cm + " cm"}</div>
          <div>Growth Form: {plant.specifications.growth_form === null ? "Unknown" : plant.specifications.growth_form}</div>
          <div>Growth Rate: {plant.specifications.growth_rate === null ? "Unknown" : plant.specifications.growth_rate}</div>
          <div>Toxicity to humans or animals: {plant.specifications.toxicity === null ? "Unknown" : plant.specifications.toxicity}</div>
        </BlockWrapper>

        <BlockWrapper>
          <h4>COMMON NAMES</h4>
          <div>
            {plant.common_names.en === undefined ? 
              (plant.common_names.eng === undefined ? "None listed" : plant.common_names.eng.join(', ')) : 
                plant.common_names.en.join(', ')}
          </div>
        </BlockWrapper>
      </BlocksWrapper>
    </PlantPageWrapper>
  );
};

export default PlantPage