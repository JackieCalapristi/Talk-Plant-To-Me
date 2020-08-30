import React from 'react';

//Components
import Header from './Header'
import Grid from './Grid';
import SearchBar from './SearchBar';
import Welcome from './Welcome';
import LoadMore from './LoadMore'

// Styles
import { GlobalStyles } from '../styles/GlobalStyles'

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Welcome />
      <SearchBar />
      <Grid />
      <LoadMore />
    </div>
  );
}

export default App


