import React from 'react';

//Components
import Header from './Header'
import Grid from './Grid';

// Styles
import { GlobalStyles } from '../styles/GlobalStyles'

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Grid />
    </div>
  );
}

export default App


