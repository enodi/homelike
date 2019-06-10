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
  IncrementRoomsCount,
  DecrementRoomsCount,
  handleBedroomFilter,
  IncrementBedroomCount,
  DecrementBedroomCount,
  roomCount,
  bedroomCount,
  IncrementFloorCount,
  DecrementFloorCount,
  handleFloorFilter,
  floorCount,
  IncrementBathroomCount,
  DecrementBathroomCount,
  handleBathroomFilter,
  bathroomCount }) => {
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
        handleRoomsFilter={handleRoomsFilter}
        IncrementRoomsCount={IncrementRoomsCount}
        DecrementRoomsCount={DecrementRoomsCount}
        handleBedroomFilter={handleBedroomFilter}
        IncrementBedroomCount={IncrementBedroomCount}
        DecrementBedroomCount={DecrementBedroomCount}
        roomCount={roomCount}
        bedroomCount={bedroomCount}
        IncrementFloorCount={IncrementFloorCount}
        DecrementFloorCount={DecrementFloorCount}
        handleFloorFilter={handleFloorFilter}
        floorCount={floorCount}
        IncrementBathroomCount={IncrementBathroomCount}
        DecrementBathroomCount={DecrementBathroomCount}
        handleBathroomFilter={handleBathroomFilter}
        bathroomCount={bathroomCount}
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
  rangeValue: PropTypes.any,
  handleRoomsFilter: PropTypes.func,
  IncrementRoomsCount: PropTypes.func,
  DecrementRoomsCount: PropTypes.func,
  handleBedroomFilter: PropTypes.func,
  IncrementBedroomCount: PropTypes.func,
  DecrementBedroomCount: PropTypes.func,
  roomCount: PropTypes.number,
  bedroomCount: PropTypes.number,
  IncrementFloorCount: PropTypes.func,
  DecrementFloorCount: PropTypes.func,
  handleFloorFilter: PropTypes.func,
  floorCount: PropTypes.number,
  IncrementBathroomCount: PropTypes.func,
  DecrementBathroomCount: PropTypes.func,
  handleBathroomFilter: PropTypes.func,
  bathroomCount: PropTypes.number
};

const mapStateToProps = state => ({
  apartmentsLocation: state.apartmentsList.apartmentsForLocation
});

export default connect(mapStateToProps, undefined)(FilterControls);