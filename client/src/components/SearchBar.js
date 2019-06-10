import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";

const SearchBar = ({ locations, history }) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchLocation = event => {
    event.preventDefault();
    const locationExists = locations.items.filter(
      location =>location.title.toLowerCase().includes(searchValue.toLowerCase()));
    if (locationExists.length === 0) {
      Swal.fire("Oops...", "No apartment exist in this location at the moment", "error");
    } else {
      const locationId = locationExists[0]._id;
      history.push(`/search/${locationId}`);
    }
  };

  const handleOnChange = event => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearchLocation}>
        <input
          type="text"
          placeholder="Search by location..."
          onChange={handleOnChange}
        />
        <button type="submit"><i className="fa fa-search"></i></button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  locations: PropTypes.object.isRequired,
  history: PropTypes.object
};

export default withRouter(SearchBar);