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

    //   // const url = "https://example.com"; // site that doesn’t send Access-Control-*
    // fetch(endpoint)
    // .then(response => response.text())
    // .then(contents => console.log(contents))
    // .catch(() => console.log("Can’t access " + endpoint + " response. Blocked by browser?"))
    // fetch(endpoint, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': 'http://localhost:3000/',
    //     'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    //   }
    // })
    // .then(response => response.json())
    // .catch((error) => {
    //   console.error('Error:', error);
    // });

      // console.log("result", result)
      // setState(prev => ({
      //     ...prev,
      //     plants: [...prev.plants],
      //         // isLoadMore !== -1
      //         //     ? [...prev.plants, ...result.results]
      //         //     : [...result.results],
      //     // heroImage: prev.heroImage || result.results[0],
      //     currentPage: result.page,
      //     totalPages: result.total_pages,
      // }));
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