import React from 'react'
import { Link } from '@reach/router'

// Components
import Spinner from '../Spinner'

// Images
import NoImage from '../../images/NoImage.png'
import BackgroundImage from '../../images/Background.jpg'

// Styles
import { 
  ImageHeaderWrapper,
  PlantDataColumnsWrapper,
  Title,
  Header
} from './PlantPage.styles'

// Hooks
import { usePlantFetch } from '../../hooks/usePlantFetch'

const PlantPage = ({ plantId }) => {
  const [{ state: { plant }, loading, error }] = usePlantFetch(plantId)

  if (error ) return <div>Something went wrong ...</div>
  if (loading) return <Spinner />
  if (plant === undefined || plant === null) {
    return (
      <div>
        <ImageHeaderWrapper image={BackgroundImage}> 
          <Header>
            <Link to="/">
              <span role="img" aria-label="growing left emoji">🌱</span> Talk Plant To Me
            </Link>
          </Header>
          <div>
            <img src={NoImage} alt={"Opps! No plant to show"} />
          </div>
          <div>
          <Link to="/">
            Back to Home >
          </Link>
        </div>
        </ImageHeaderWrapper>
      </div>
    )
  }

  return (
    <div>
      <Header>
        <Link to="/">
          <span role="img" aria-label="growing left emoji">🌱</span> Talk Plant To Me
        </Link>
      </Header>
      <ImageHeaderWrapper image={BackgroundImage}> 
        <div>
          <img src={plant.image_url !== null ? plant.image_url : NoImage} alt={plant.common_name} />
        </div>
        <div>
          <Title>{plant.common_name}</Title>
          <div>Scientific Name: {plant.scientific_name}</div>
          <div>Genus: {plant.genus}</div>
          <div>Family: {plant.family_common_name !== (undefined || null) ? plant.family_common_name : plant.family } </div>
        </div>
      </ImageHeaderWrapper>
      <PlantDataColumnsWrapper>
        <div>
          <h4>PLANT CARE</h4>
          <div>Best months for growth: {plant.growth.growth_months === null ? "Unknown" : plant.growth.growth_months}</div>
          <div>Best months for bloom: {plant.growth.bloom_months === null ? "Unknown" : plant.growth.bloom_months.join(', ')}</div>
          <div>Required soil humidity: {plant.growth.soil_humidity === null ? "Unknown" : plant.growth.soil_humidity} </div>
          <div>Required air humidity: {plant.growth.atmospheric_humidity === null ? "Unknown" : plant.growth.atmospheric_humidity} </div>
          <div>Max Temperture: {plant.growth.maximum_temperature.deg_c === null ? "Unknown" : plant.growth.maximum_temperature.deg_c + " Celcius"}</div>
          <div>Min Temperture: {plant.growth.minimum_temperature.deg_c === null ? "Unknown" : plant.growth.minimum_temperature.deg_c + " Celcius"}</div>
          <div>Required Light: {plant.growth.light === null ? "Unknown" : plant.growth.light + " Lux"}</div>
          <div>Max Soil PH: {plant.growth.ph_maximum === null ? "Unknown" : plant.growth.ph_maximum } </div>
          <div>Min Soil PH: {plant.growth.ph_minimum === null ? "Unknown" : plant.growth.ph_minimum }</div>
        </div>
        <div>
          <h4>PLANT SPECS</h4>
          <div>Average Height: {plant.specifications.average_height.cm === null ? "Unknown" : plant.specifications.average_height.cm.toLocaleString() + " cm"}</div>
          <div>Maximum Height: {plant.specifications.maximum_height.cm === null ? "Unknown" : plant.specifications.maximum_height.cm.toLocaleString() + " cm"}</div>
          <div>Growth Form: {plant.specifications.growth_form === null ? "Unknown" : plant.specifications.growth_form}</div>
          <div>Growth Rate: {plant.specifications.growth_rate === null ? "Unknown" : plant.specifications.growth_rate}</div>
          <div>Toxicity to humans or animals: {plant.specifications.toxicity === null ? "Unknown" : plant.specifications.toxicity}</div>
          <div>{plant.vegetable === undefined ? "Unknown" : plant.vegetable ? "Is a " : "Not a "} vegetable</div>
          <div>{plant.edible === undefined ? "Unknown" : plant.edible ? "Is " : "Is Not " } edible</div>
        </div>
        <div>
          <h4>COMMON NAMES</h4>
          <div>
            {plant.common_names.en === undefined ? 
              (plant.common_names.eng === undefined ? "None listed" : plant.common_names.eng.join(', ')) : 
                plant.common_names.en.join(', ')}
          </div>
        </div>
      </PlantDataColumnsWrapper>
    </div>
  )
}

export default PlantPage