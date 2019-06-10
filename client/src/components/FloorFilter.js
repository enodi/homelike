import React from "react";
import PropTypes from "prop-types";

const FloorFilter = ({
  IncrementFloorCount,
  DecrementFloorCount,
  handleFloorFilter,
  floorCount
}) => (
  <div>
    <span>Floors</span>
    <button onClick={DecrementFloorCount}>-</button>
    <span>{floorCount}</span>
    <button onClick={IncrementFloorCount}>+</button>
    <button
      className="apply-button"
      onClick={handleFloorFilter}
    >Apply</button>
  </div>
);

FloorFilter.propTypes = {
  IncrementFloorCount: PropTypes.func,
  DecrementFloorCount: PropTypes.func,
  handleFloorFilter: PropTypes.func,
  floorCount: PropTypes.number
};

export default FloorFilter;