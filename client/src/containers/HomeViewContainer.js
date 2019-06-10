import { connect } from "react-redux";
import { fetchApartmentsList } from "../actions/apartmentsListActions";
import { fetchLocationsList } from "../actions/locationsListActions";
import HomeView from "../views/HomeView";

const mapStateToProps = state => ({
  apartmentsList: state.apartmentsList.apartments,
  locationsList: state.locationsList.locations || {},
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  fetchApartmentsList: () => dispatch(fetchApartmentsList()),
  fetchLocationsList: () => dispatch(fetchLocationsList())
});

const HomeViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeView);

export default HomeViewContainer;
