import {
  FETCH_LOCATIONS_LIST,
  FETCH_LOCATIONS_LIST_ERROR
} from "../actions/types";

const initialState = {
  locations: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
  case FETCH_LOCATIONS_LIST:
    return {
      ...state,
      locations: action.payload.locations,
    };
  case FETCH_LOCATIONS_LIST_ERROR:
    return {
      ...state,
      error: action.payload.error,
    };
  default:
    return state;
  }
};
