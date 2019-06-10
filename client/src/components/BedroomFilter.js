import React from "react";
import PropTypes from "prop-types";

const BedroomFilter = ({
  handleBedroomFilter,
  IncrementBedroomCount,
  DecrementBedroomCount,
  bedroomCount
}) => (
  <div>
    <span>Bedrooms</span>
    <button onClick={DecrementBedroomCount}>-</button>
    <span>{bedroomCount}</span>
    <button onClick={IncrementBedroomCount}>+</button>
    <button
      className="apply-button"
      onClick={handleBedroomFilter}
    >Apply</button>
  </div>
);

BedroomFilter.propTypes = {
  handleBedroomFilter: PropTypes.func,
  DecrementBedroomCount: PropTypes.func,
  IncrementBedroomCount: PropTypes.func,
  bedroomCount: PropTypes.number
};

export default BedroomFilter;