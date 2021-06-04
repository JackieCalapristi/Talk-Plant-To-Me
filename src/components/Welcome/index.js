import React from 'react'
import { Link } from '@reach/router'

// Styles
import { Wrapper, Title, TrefleApiLinkWrapper } from './Welcome.styles'

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
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/treflehq/documentation"> 
          <div>The Trefle API</div>
        </a>
    </TrefleApiLinkWrapper>
    <h4> <span role="img" aria-label="leaf emoji">🌱</span> Note: The Trefle API this project relies on has been recently abandoned by the creators. <br
    /> Stay tuned for what comes next for this project! </h4>
  </Wrapper>
)

export default Welcome