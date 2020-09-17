import { useState, useEffect } from 'react'
import { ALL_PLANTS_BASE_URL } from '../config'

export const usePlantsFetch = searchTerm => { 
  const [state, setState] = useState({ plants: [] })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchPlants = async endpoint => {
    setError(false);
    setLoading(true);

    const isLoadMore = endpoint.search('page')

    try {
      const result = await (await fetch(endpoint)).json()
      
      setState(prev => ({
        ...prev,
        plants: 
          isLoadMore !== -1
            ? [...prev.plants, ...result.data]
            : [...result.data],
        firstPageUrl: result.links.first,
        nextPageUrl: result.links.next,
        totalResults: result.meta.total
      }));
    }
    catch (error) {
      setError(true)
      console.log(error)
    }
  setLoading(false)
}

// Fetch plants initially on mount
useEffect(() => {
  if (sessionStorage.plantState) {
    setState(JSON.parse(sessionStorage.plantState))
    setLoading(false)
  }
  else {
    fetchPlants(ALL_PLANTS_BASE_URL)
  }
}, [])

useEffect(() => {
  if (!searchTerm) {
    sessionStorage.setItem('plantState', JSON.stringify(state))
  }
}, [searchTerm, state])

  return [{state, loading, error}, fetchPlants]
}