import React from "react";
import PropTypes from "prop-types";

const BathroomFilter = ({
  IncrementBathroomCount,
  DecrementBathroomCount,
  handleBathroomFilter,
  bathroomCount
}) => (
  <div>
    <span>Bathrooms</span>
    <button onClick={DecrementBathroomCount}>-</button>
    <span>{bathroomCount}</span>
    <button onClick={IncrementBathroomCount}>+</button>
    <button
      className="apply-button"
      onClick={handleBathroomFilter}
    >Apply</button>
  </div>
);

BathroomFilter.propTypes = {
  IncrementBathroomCount: PropTypes.func,
  DecrementBathroomCount: PropTypes.func,
  handleBathroomFilter: PropTypes.func,
  bathroomCount: PropTypes.number
};

export default BathroomFilter;