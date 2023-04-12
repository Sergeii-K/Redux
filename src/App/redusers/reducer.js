import {
  FETCH_STARSHIPS_REQUEST,
  FETCH_STARSHIPS_SUCCESS,
  FETCH_STARSHIPS_FAILURE,
  SORT_STARSHIPS,
  SORT_PASSENGERS
} from '../action/type';

const initialState = {
  starships: [{name: "тру-ля-ля"}],
  loading: false,
  error: null
};

const starshipsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STARSHIPS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_STARSHIPS_SUCCESS:
      return {
        ...state,
        loading: false,
        starships: action.payload
      };
    case FETCH_STARSHIPS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case SORT_STARSHIPS:
      return {
        ...state,
        starships: [...state.starships].sort((a, b) => a.name.localeCompare(b.name))
      };
    case SORT_PASSENGERS:
      return {
        ...state,
        starships: [...state.starships].sort(( a, b) => ((parseInt (a.passengers) > parseInt (b.passengers))) ? 1 : -1)
      };

    default:
      return state;
  };
};

export default starshipsReducer;



// import {
//   FETCH_STARSHIPS_REQUEST,
//   FETCH_STARSHIPS_SUCCESS,
//   FETCH_STARSHIPS_FAILURE,
// } from './types';

// const initialState = {
//   loading: false,
//   starships: [],
//   error: '',
// };

// const starshipsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_STARSHIPS_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case FETCH_STARSHIPS_SUCCESS:
//       return {
//         loading: false,
//         starships: action.payload,
//         error: '',
//       };
//     case FETCH_STARSHIPS_FAILURE:
//       return {
//         loading: false,
//         starships: [],
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default starshipsReducer;
