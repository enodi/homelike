import gql from "graphql-tag";
import { FETCH_LOCATIONS_LIST, FETCH_LOCATIONS_LIST_ERROR } from "./types";
import client from "../ApolloClient";

export const fetchLocationsList = () => dispatch => {
  client.query({
    query: gql`
      {
        locations(active: true) {
          items {
            _id,
            title
          }
        }
      }`
  })
    .then(locations => dispatch({
      type: FETCH_LOCATIONS_LIST,
      payload: locations.data
    }))
    .catch(error => dispatch({
      type: FETCH_LOCATIONS_LIST_ERROR,
      payload: error,
    }));
};
