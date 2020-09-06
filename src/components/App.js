import React from 'react';

//Components
import Header from './Header'
import Grid from './Grid';
import Welcome from './Welcome';

// Styles
import { GlobalStyles } from '../styles/GlobalStyles'

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Welcome />
      <Grid />
    </div>
  );
}

export default App


