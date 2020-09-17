import React from "react"
import { Link } from '@reach/router'

// Styles
import { Wrapper, Title, TrefleApiLinkWrapper } from "./Welcome.styles"

// Images
import TrefleApiImage from '../../images/TrefleLogo.svg'

const Welcome = () => (
  <Wrapper>
    <Title>
      <Link to="/">
        <span role="img" aria-label="growing left emoji">🌱</span> Talk Plant To Me
      </Link>
    </Title>
    <h5>Learn more about your favorite plants & <br /> become a better plant parent.</h5>
    <TrefleApiLinkWrapper>
      <div>Powered by </div>
        <img src={TrefleApiImage} alt="Trefle API black clover logo" />
        <a href="https://trefle.io/"> 
          <div>The Trefle API</div>
        </a>
    </TrefleApiLinkWrapper>
  </Wrapper>
)

export default Welcome