// Configuration for the Trefle API
// Read more about the API here: https://docs.trefle.io/

const API_URL = 'https://trefle.io/api/v1/plants';
const API_KEY = 'V0FEWm1DcEdlTTBFUUZqTkczVEx5UT09';

const SEARCH_BASE_URL = `${API_URL}search?api_key=${API_KEY}&query=`;
const ALL_PLANTS_BASE_URL = `${API_URL}?api_key=${API_KEY}`;

export { 
  API_URL, 
  API_KEY, 
  SEARCH_BASE_URL,
  ALL_PLANTS_BASE_URL
};
