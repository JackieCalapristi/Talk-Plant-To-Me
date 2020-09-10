import React from 'react';
import { Router } from '@reach/router';

//Components
import PlantsHome from './PlantsHome'
import PlantPage from './PlantPage'
import Header from './Header'
import NotFound from './NotFound'
import Footer from './Footer'

// Styles
import { GlobalStyles } from '../styles/GlobalStyles'

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Router>
        <PlantsHome path="/" />
        <PlantPage path="/:plantId" />
      </Router>
      <Footer />
    </div>
  );
}

export default App


