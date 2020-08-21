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

    const result = fetch('/getPlantData.py', {
      method  : 'GET',
      headers : {
          'Content-Type': 'application/json'
      },
    })
    .then(function(response) { 
      return response.text(); 
    }).then(function(data) {
      console.log('HI', data); 
    })

    try {
     


    //   $.ajax({ 
    //     type:'get', 
    //     url:'getPlantData.py', 
    //     cache:false, 
    //     async:'asynchronous', 
    //     dataType:'json', 
    //     success: function(data) { 
    //       console.log(JSON.stringify(data)) 
    //     }, 
    //     error: function(request, status, error) { 
    //       console.log("Error: " + error) 
    //     } 
    //  });  

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