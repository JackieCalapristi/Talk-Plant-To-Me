// Configuration for the Trefle API
// Read more about the API here: https://docs.trefle.io/
const API_KEY = 'redacted'
const API_URL = 'https://cors-anywhere.herokuapp.com/trefle.io/api/v1/species'
const API_BASE_URL = 'https://cors-anywhere.herokuapp.com/trefle.io'

const SEARCH_BASE_URL = `${API_URL}/search?token=${API_KEY}&q=`
const ALL_PLANTS_BASE_URL = `${API_URL}?token=${API_KEY}`

export { 
  API_URL, 
  API_KEY, 
  SEARCH_BASE_URL,
  ALL_PLANTS_BASE_URL,
  API_BASE_URL
}
