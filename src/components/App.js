import React from 'react';
import { Router } from '@reach/router';

//Components
import PlantsHome from './PlantsHome'
import PlantPage from './PlantPage'
import NotFound from './NotFound'

// Styles
import { GlobalStyles } from '../styles/GlobalStyles'

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <PlantsHome path="/" />
        <PlantPage path="/:plantId" />
      </Router>
    </div>
  );
}

export default App


