import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";

import ApartmentTileView from "./ApartmentTileView";
import Header from "./HeaderView";

const LocationView = ({
  apartmentsForLocation,
  fetchApartmentsListForLocation,
  match,
  locations,
  fetchLocationsList
}) => {
  useEffect(() => {
    const { locationId } = match.params;
    fetchLocationsList();
    fetchApartmentsListForLocation(locationId);
  });

  const locationTitle = () => {
    const { locationId } = match.params;
    const [currentLocation] = locations.filter(
      location => location._id === locationId,
    );
    return currentLocation.title;
  };

  if (!Object.keys(apartmentsForLocation).length) {
    return (
      <div className="loader">
        <Loader type="Oval" color="#00BFFF" height="100" width="100" />
      </div>
    );
  }

  return (
    <Fragment>
      <Header />
      <div className="container-list container-lg clearfix">
        <div className="col-8 float-left">
          <h1 className="location">{locationTitle()}</h1>
          <div className="view-apartment-list">
            {apartmentsForLocation.items.map(item => (
              <ApartmentTileView key={item._id} apartment={item} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

LocationView.propTypes = {
  apartmentsForLocation: PropTypes.object,
  fetchApartmentsListForLocation: PropTypes.func,
  match: PropTypes.object,
  locations: PropTypes.array,
  fetchLocationsList: PropTypes.func
};

export default LocationView;