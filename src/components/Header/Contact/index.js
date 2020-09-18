import React from 'react'
import { Link } from '@reach/router'

// Styles
import { ContactWrapper, Title, ContactText, Signature, IconsWrapper } from './Contact.styles'
import { Header } from '../../PlantPage/PlantPage.styles'

// Icons
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Images
import ContactBackground from '../../../images/ContactBackSplash.png'

const Contact = () => (
  <ContactWrapper image={ContactBackground}>
    <Header>
        <Link to="/">
          <span role="img" aria-label="growing left emoji">🌱</span> Talk Plant To Me
        </Link>
      </Header>
    <Title>Contact</Title>
    <ContactText>
      Hi. My name is Jackie Calapristi and I created this web app. 
      Did you find a bug? Wanna tell me about how much you love ferns? 
      I would love to hear from you!
      <IconsWrapper>
        <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jackie.lc11@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jacquelinecalapristi/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/JackieCalapristi/"><FontAwesomeIcon icon={faGithub} /></a>  
      </IconsWrapper>
      <br />
          If you're curious about the origins of any data you see in this web app or if you want to contribute to the Trefle API, 
          check out the <a target="_blank" rel="noopener noreferrer" href="https://docs.trefle.io/">Trefle API's docs here</a> and <a target="_blank" rel="noopener noreferrer" href="https://github.com/treflehq/trefle-api">their Github page here.</a>
      <br />
    </ContactText>
    <Signature> Happy Planting!</Signature>
  </ContactWrapper>
)

export default Contact