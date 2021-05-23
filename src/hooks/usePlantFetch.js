import { useState, useEffect, useCallback } from 'react'
import { API_URL, API_KEY } from '../config'

export const usePlantFetch = plantId => {
  const [state, setState] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchData = useCallback(async () => {
    setError(false)
    setLoading(true)

    try {
      const endpoint = `${API_URL}/${plantId}?token=${API_KEY}`
      const result = await (await fetch(endpoint, {
        method: 'GET', 
        origin: 'x-requested-with',
        headers: {
          'Content-Type': 'application/json'
        },
      })).json()

      setState({
        plant: result.data
      })

    } catch (error) {
      setError(true)
    }
    setLoading(false)

  }, [plantId])

  useEffect(() => {
    if (localStorage[plantId]) {
      setState(JSON.parse(localStorage[plantId]))
      setLoading(false)
    }
    else {
      fetchData()
    }
  }, [fetchData, plantId])

  useEffect(() => {
    localStorage.setItem(plantId, JSON.stringify(state))
  }, [plantId, state])

  return [{ state, loading, error }]
}