import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchApartmentsListForLocation } from "../actions/apartmentsListActions";

const Dropdown = ({ locations }) => (
  <div className="location-dropdown__wrapper">
    <h4>Filter by Location</h4>
    <div className="dropdown">
      <button className="dropbtn">Select Location 
        <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content">
        {
          locations.items.map(location => (
            <Link to={`/locations/${location._id}`} key={location._id}>
              {location.title}
            </Link>
          ))
        }
      </div>
    </div>
  </div>
);

Dropdown.propTypes = {
  locations: PropTypes.object.isRequired,
  fetchApartmentsListForLocation: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  fetchApartmentsListForLocation: id => dispatch(fetchApartmentsListForLocation(id))
});

export default connect(undefined, mapDispatchToProps)(Dropdown);