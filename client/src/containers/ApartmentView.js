import { connect } from "react-redux";
import { fetchApartment } from "../actions/apartmentActions";
import ApartmentView from "../views/ApartmentView";

const mapStateToProps = state => ({
  apartment: state.apartmentItem.apartment,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  fetchApartment: id => dispatch(fetchApartment(id))
});

const ApartmentViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApartmentView);

export default ApartmentViewContainer;
