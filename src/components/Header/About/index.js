import React from 'react'
import { Link } from '@reach/router'

// Styles
import { AboutWrapper, Title, ContactText, Signature } from './About.styles'
import { Header } from '../../PlantPage/PlantPage.styles'

// Images
import AboutBackground from '../../../images/AboutBackSplash.png'

const About = () => (
  <AboutWrapper image={AboutBackground}>
    <Header>
        <Link to="/">
          <span role="img" aria-label="growing left emoji">🌱</span> Talk Plant To Me
        </Link>
      </Header>
    <Title>About</Title>
    <ContactText>
      This app was originally created because I wanted to help my Mom, an avid gardener, learn more about her plants. 
      I hope it helps you learn more about your plants, and any plant you're curious about, too! 
      I owe so much gratitude to the creators of and contributors to the Trefle API, whom without this web app could not be possible. 
      Also whom without, I could have never discovered just how many plants are, in fact, not vegetables. 
      Thank you so much for visiting, I wholeheartedly hope you enjoy using this web app! 
    </ContactText>
    <Signature>- Jackie Calapristi</Signature>
  </AboutWrapper>
)

export default About