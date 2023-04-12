import axios from 'axios';

import {
  FETCH_STARSHIPS_REQUEST,
  FETCH_STARSHIPS_SUCCESS,
  FETCH_STARSHIPS_FAILURE,
  SORT_STARSHIPS,
  SORT_PASSENGERS,
  // FETCH_STARSHIPS_MODEL
} from '../action/type';

export const fetchStarships = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_STARSHIPS_REQUEST });

    axios.get('https://swapi.dev/api/starships')
      .then(response => {
        const starships = response.data.results;
        dispatch({
          type: FETCH_STARSHIPS_SUCCESS,
          payload: starships
        });
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch({
          type: FETCH_STARSHIPS_FAILURE,
          payload: errorMessage
        });
      });
  };
};

export const sortStarships = () => {
  return {
    type: SORT_STARSHIPS
  };
};

export const sortPassengers = () => {
  return {
    type: SORT_PASSENGERS
  };
};

// export const StarshipsModel = () => {
//   return {
//     type: FETCH_STARSHIPS_MODEL
//   };
// };