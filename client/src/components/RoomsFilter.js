import React from "react";
import PropTypes from "prop-types";

const RoomsFilter = ({
  handleRoomsFilter,
  DecrementRoomsCount,
  IncrementRoomsCount,
  roomCount
}) => (
  <div>
    <span>Rooms</span>
    <button onClick={DecrementRoomsCount}>-</button>
    <span>{roomCount}</span>
    <button onClick={IncrementRoomsCount}>+</button>
    <button
      className="apply-button"
      onClick={handleRoomsFilter}
    >Apply</button>
  </div>
);

RoomsFilter.propTypes = {
  handleRoomsFilter: PropTypes.func,
  DecrementRoomsCount: PropTypes.func,
  IncrementRoomsCount: PropTypes.func,
  roomCount: PropTypes.number
};

export default RoomsFilter;