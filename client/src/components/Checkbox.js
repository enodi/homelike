import React, { Fragment } from "react";
import { uniqueId } from "lodash";
import PropTypes from "prop-types";

const Checkbox = ({
  items,
  selectedItems = [], 
  handleCheckboxToggle,
  handleAmenityFilter,
  resetFilters,
  label,
  handleServicesFilter
}) => (
  <Fragment>
    {items && items.map(value => (
      <div key={uniqueId()}>
        <input
          type="checkbox"
          value={value}
          onChange={handleCheckboxToggle}
          checked={selectedItems.includes(value)}
        />
        <span className="checkbox-text">{value}</span>
      </div>
    ))}
    <div className="filter-buttons">
      <button className="reset-button" onClick={resetFilters}>Reset Filter</button>
      { label.toLowerCase() === "amenities"
        ?
        <button className="apply-button" onClick={handleAmenityFilter}>Apply</button>
        :
        <button className="apply-button" onClick={handleServicesFilter}>Apply</button>
      }
      
    </div>
  </Fragment>
);

Checkbox.propTypes = {
  items: PropTypes.array,
  selectedItems: PropTypes.array,
  handleCheckboxToggle: PropTypes.func,
  handleAmenityFilter: PropTypes.func,
  resetFilters: PropTypes.func,
  handleServicesFilter: PropTypes.func,
  label: PropTypes.string
};

export default Checkbox;