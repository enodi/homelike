import React from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";

import ApartmentTileView from "./ApartmentTileView";
import Header from "./HeaderView";
import Dropdown from "../components/Dropdown";
import SearchBar from "../components/SearchBar";

class HomeView extends React.Component {
  componentDidMount() {
    this.props.fetchApartmentsList();
    this.props.fetchLocationsList();
  }

  render() {
    const { apartmentsList, locationsList } = this.props;
    if (!Object.keys(apartmentsList).length ||
        !Object.keys(locationsList).length) {
      return (
        <div className="loader">
          <Loader type="Oval" color="#00BFFF" height="100" width="100" />
        </div>
      );
    }

    return (
      <React.Fragment>
        <Header />
        <div className="container-list container-lg clearfix">
          <div className="col-12 float-left">
            <div className="search-wrapper">
              <Dropdown locations={locationsList} />
              <SearchBar locations={locationsList} />
            </div>
            <div className="view-apartment-list">
              {apartmentsList.items.map(item => (
                <ApartmentTileView key={item._id} apartment={item} />
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

HomeView.propTypes = {
  apartmentsList: PropTypes.object.isRequired,
  fetchApartmentsList: PropTypes.func.isRequired,
  fetchLocationsList: PropTypes.func.isRequired,
  locationsList: PropTypes.object.isRequired
};

export default HomeView;
