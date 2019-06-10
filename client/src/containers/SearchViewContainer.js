import { connect } from "react-redux";
import { fetchApartmentsListForLocation } from "../actions/apartmentsListActions";
import { fetchLocationsList } from "../actions/locationsListActions";
import SearchView from "../views/SearchView";

const mapDispatchToProps = dispatch => ({
  fetchApartmentsListForLocation: id => dispatch(fetchApartmentsListForLocation(id)),
  fetchLocationsList: () => dispatch(fetchLocationsList())
});

const mapStateToProps = state => ({
  apartmentsForLocation: state.apartmentsList.apartmentsForLocation || {},
  locations: state.locationsList.locations.items || [],
  error: state.error
});

const SearchViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchView);

export default SearchViewContainer;