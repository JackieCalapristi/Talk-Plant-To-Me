// Configuration for the Trefle API
// Read more about the API here: https://docs.trefle.io/

const API_URL = 'https://trefle.io/api/v1/plants';
const API_KEY = 'V0FEWm1DcEdlTTBFUUZqTkczVEx5UT09';
const LOCAL_URL = 'http://localhost:3000';

const SEARCH_BASE_URL = `${API_URL}/search?token=${API_KEY}&query=`;
const ALL_PLANTS_BASE_URL = `${API_URL}?token=${API_KEY}&origin=${LOCAL_URL}`;

export { 
  API_URL, 
  API_KEY, 
  SEARCH_BASE_URL,
  ALL_PLANTS_BASE_URL
};
