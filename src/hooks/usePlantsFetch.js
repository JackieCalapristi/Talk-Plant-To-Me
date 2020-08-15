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
    console.log(endpoint);

    try {
        const result = await (await fetch(endpoint)).json();
        console.log("result", result)
        setState(prev => ({
            ...prev,
            plants: [...prev.plants],
                // isLoadMore !== -1
                //     ? [...prev.plants, ...result.results]
                //     : [...result.results],
            // heroImage: prev.heroImage || result.results[0],
            // currentPage: result.page,
            // totalPages: result.total_pages,
        }));
  }
  catch (error) {
      setError(true);
      console.log(error);
  }
  setLoading(false);
}

// Fetch plants initially on mount
useEffect(() => {
  console.log("sessionStorage", sessionStorage)
  if (sessionStorage.homeState) {
      setState(JSON.parse(sessionStorage.homeState));
      setLoading(false);
  }
  else {
      fetchPlants(ALL_PLANTS_BASE_URL);
  }
}, [])

useEffect(() => {
  if (!searchTerm) {
      sessionStorage.setItem('homeState', JSON.stringify(state))
  }
}, [searchTerm, state]);

  return [{state, loading, error}, fetchPlants];
};