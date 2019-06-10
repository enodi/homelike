import { connect } from "react-redux";
import { fetchApartmentsListForLocation } from "../actions/apartmentsListActions";
import { fetchLocationsList } from "../actions/locationsListActions";
import LocationView from "../views/LocationView";

const mapDispatchToProps = dispatch => ({
  fetchApartmentsListForLocation: id => dispatch(fetchApartmentsListForLocation(id)),
  fetchLocationsList: () => dispatch(fetchLocationsList())
});

const mapStateToProps = state => ({
  apartmentsForLocation: state.apartmentsList.apartmentsForLocation || {},
  locations: state.locationsList.locations.items || [],
  error: state.error
});

const LocationViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationView);

export default LocationViewContainer;
