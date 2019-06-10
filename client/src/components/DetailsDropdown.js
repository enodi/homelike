import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { uniqueId } from "lodash";

const DetailsDropdown = ({
  resetFilters,
  label,
  apartmentItems,
  handleRoomsFilter,
  handleIncrementCount,
  handleDecrementCount,
  count 
}) => {

  const [uniqueValue, setUniqueValue] = useState([]);

  useEffect(() => {
    const details = apartmentItems.map(items => 
      Object.keys(items.details).filter(item => item !== "__typename"));
    setUniqueValue([...new Set(details.flat())]);
  }, []);

  return (
    <div className="details__dropdown">
      <button className="details__dropbtn">{label} 
        <i className="fa fa-caret-down"></i>
      </button>
      <div className="details__dropdown-content">
        { 
          uniqueValue && 
          uniqueValue.map(value => (
            <div key={uniqueId()} className="details__dropdown-items">
              <div>
                <span>{value}</span>
                <button onClick={handleDecrementCount}>-</button>
                <span>{count}</span>
                <button onClick={handleIncrementCount}>+</button>
              </div>
              <div>
                <button
                  className="apply-button"
                  onClick={handleRoomsFilter}
                >Apply</button>
              </div>
            </div>
          ))
        }
        <div className="filter-buttons">
          <button className="reset-button" onClick={resetFilters}>Reset Filter</button>
        </div>
      </div>
    </div>
  );
};

DetailsDropdown.propTypes = {
  label: PropTypes.string,
  resetFilters: PropTypes.func,
  apartmentItems: PropTypes.array,
};

export default DetailsDropdown;
