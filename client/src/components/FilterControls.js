import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import RangeSlider from "./RangeSlider";
import CheckboxDropdown from "./CheckboxDropdown";
import DetailsDropdown from "./DetailsDropdown";

const FilterControls = ({
  apartmentsLocation,
  handleCheckboxToggle,
  handleSizeFilter,
  handlePriceFilter,
  selectedItems,
  rangeValue,
  handleAmenityFilter,
  resetFilters,
  handleServicesFilter,
  handleSizeToggle,
  handlePriceToggle,
  handleRoomsFilter,
  handleIncrementCount,
  handleDecrementCount,
  count }) => {
  return (
    <div className="filter-container">
      <RangeSlider
        label="Size" min="0" max="100"
        handleSizeFilter={handleSizeFilter}
        resetFilters={resetFilters}
        rangeValue={rangeValue}
        handleSizeToggle={handleSizeToggle}
      />
      <RangeSlider
        label="Price" min="0" max="1500"
        handlePriceFilter={handlePriceFilter}
        rangeValue={rangeValue}
        handlePriceToggle={handlePriceToggle}
        resetFilters={resetFilters}
      />
      <DetailsDropdown
        label="Details"
        resetFilters={resetFilters}
        apartmentItems={apartmentsLocation.items}
        handleRoomsFilter={handleRoomsFilter}
        handleIncrementCount={handleIncrementCount}
        handleDecrementCount={handleDecrementCount}
        count={count}
      />
      <CheckboxDropdown
        label="Amenities"
        apartmentItems={apartmentsLocation.items}
        handleCheckboxToggle={handleCheckboxToggle}
        selectedItems={selectedItems}
        handleAmenityFilter={handleAmenityFilter}
        resetFilters={resetFilters}
      />
      <CheckboxDropdown
        label="Services"
        apartmentItems={apartmentsLocation.items}
        handleCheckboxToggle={handleCheckboxToggle}
        selectedItems={selectedItems}
        handleServicesFilter={handleServicesFilter}
        resetFilters={resetFilters}
      />
    </div>
  );
};

FilterControls.propTypes = {
  apartmentsLocation: PropTypes.object,
  handleCheckboxToggle: PropTypes.func,
  handleSizeFilter: PropTypes.func,
  selectedItems: PropTypes.array,
  handleAmenityFilter: PropTypes.func,
  resetFilters: PropTypes.func,
  handleServicesFilter: PropTypes.func,
  handlePriceFilter: PropTypes.func,
  handleSizeToggle: PropTypes.func,
  handlePriceToggle: PropTypes.func,
  rangeValue: PropTypes.any
};

const mapStateToProps = state => ({
  apartmentsLocation: state.apartmentsList.apartmentsForLocation
});

export default connect(mapStateToProps, undefined)(FilterControls);