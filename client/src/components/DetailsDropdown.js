import React from "react";
import PropTypes from "prop-types";

import RoomsFilter from "./RoomsFilter";
import BedroomFilter from "./BedroomFilter";
import FloorFilter from "./FloorFilter";
import BathroomFilter from "./BathroomFilter";

const DetailsDropdown = ({
  resetFilters,
  label,
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
  bathroomCount
}) => {

  return (
    <div className="details__dropdown">
      <button className="details__dropbtn">{label} 
        <i className="fa fa-caret-down"></i>
      </button>
      <div className="details__dropdown-content">
        <div className="details__dropdown-items">
          <RoomsFilter
            handleRoomsFilter={handleRoomsFilter}
            IncrementRoomsCount={IncrementRoomsCount}
            DecrementRoomsCount={DecrementRoomsCount}
            roomCount={roomCount}
          />
          <BedroomFilter
            handleBedroomFilter={handleBedroomFilter}
            IncrementBedroomCount={IncrementBedroomCount}
            DecrementBedroomCount={DecrementBedroomCount}
            bedroomCount={bedroomCount}
          />
          <FloorFilter 
            IncrementFloorCount={IncrementFloorCount}
            DecrementFloorCount={DecrementFloorCount}
            handleFloorFilter={handleFloorFilter}
            floorCount={floorCount}
          />
          <BathroomFilter
            IncrementBathroomCount={IncrementBathroomCount}
            DecrementBathroomCount={DecrementBathroomCount}
            handleBathroomFilter={handleBathroomFilter}
            bathroomCount={bathroomCount}
          />
        </div>
        <div className="filter-buttons">
          <button className="reset-button" onClick={resetFilters}>Reset Filter</button>
        </div>
      </div>
    </div>
  );
};

DetailsDropdown.propTypes = {
  label: PropTypes.string,
  roomCount: PropTypes.number,
  bedroomCount: PropTypes.number,
  resetFilters: PropTypes.func,
  handleRoomsFilter: PropTypes.func,
  IncrementRoomsCount: PropTypes.func,
  DecrementRoomsCount: PropTypes.func,
  handleBedroomFilter: PropTypes.func,
  IncrementBedroomCount: PropTypes.func,
  DecrementBedroomCount: PropTypes.func,
  IncrementFloorCount: PropTypes.func,
  DecrementFloorCount: PropTypes.func,
  handleFloorFilter: PropTypes.func,
  floorCount: PropTypes.number,
  IncrementBathroomCount: PropTypes.func,
  DecrementBathroomCount: PropTypes.func,
  handleBathroomFilter: PropTypes.func,
  bathroomCount: PropTypes.number
};

export default DetailsDropdown;
