import { useState, useEffect } from 'react'
import { ALL_PLANTS_BASE_URL } from '../config'

export const usePlantsFetch = searchTerm => { 
  const [state, setState] = useState({ plants: [] })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchPlants = async endpoint => {
    setError(false);
    setLoading(true);

    const isLoadMore = endpoint.search('page');
    console.log();

    try {
      let headers = new Headers();
      headers.append('Access-Control-Allow-Origin', 'http://localhost:3000/');
      // headers.append('Access-Control-Allow-Credentials', 'true');
      headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

      const result = await (await fetch(endpoint, {
        headers: {
          // 'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000/',
          // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
        }
      })).json();

    }
    catch (error) {
        setError(true);
        console.log(error);
    }
  setLoading(false);
}

// Fetch plants initially on mount
useEffect(() => {
  if (sessionStorage.plantState) {
      setState(JSON.parse(sessionStorage.plantState));
      setLoading(false);
      console.log("hello", sessionStorage)
  }
  else {
      fetchPlants(ALL_PLANTS_BASE_URL);
  }
}, [])

useEffect(() => {
  if (!searchTerm) {
      sessionStorage.setItem('plantState', JSON.stringify(state))
  }
}, [searchTerm, state]);

  return [{state, loading, error}, fetchPlants];
};