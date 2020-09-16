import React from 'react'
import { Router } from '@reach/router'

//Components
import PlantsHome from './PlantsHome'
import PlantPage from './PlantPage'
import Header from './Header'
import Footer from './Footer'
import Contact from './Header/Contact'
import About from './Header/About'

// Styles
import { GlobalStyles } from '../styles/GlobalStyles'

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Router>
        <PlantsHome path="/" />
        <Contact path="/Contact" />
        <About path="/About" />
        <PlantPage path="/:plantId" />
      </Router>
      <Footer />
    </div>
  )
}

export default App


