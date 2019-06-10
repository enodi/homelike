import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Checkbox from "./Checkbox";

const CheckboxDropdown = ({
  label,
  apartmentItems,
  handleCheckboxToggle,
  selectedItems,
  handleAmenityFilter,
  resetFilters,
  handleServicesFilter
}) => {
  const [uniq, setUniq] = useState([]);
  
  useEffect(() => {
    let apartments = [];
    if (label.toLowerCase() === "amenities") {
      apartments = apartmentItems.map(items => items.amenities);
    } else {
      apartments = apartmentItems.map(items => items.services);
    }
    const allItems = apartments.reduce((itemsArray, item) => 
      itemsArray.concat(item), []);
    setUniq([...new Set(allItems)]);
  }, []);
  
  return (
    <div className="checkbox__dropdown">
      <button className="checkbox__dropbtn">{label} 
        <i className="fa fa-caret-down"></i>
      </button>
      <div className="checkbox__dropdown-content">
        <Checkbox
          items={uniq}
          selectedItems={selectedItems}
          handleCheckboxToggle={handleCheckboxToggle}
          handleAmenityFilter={handleAmenityFilter}
          resetFilters={resetFilters}
          label={label}
          handleServicesFilter={handleServicesFilter}
        />
      </div>
    </div>
  );
};

CheckboxDropdown.propTypes = {
  label: PropTypes.string,
  apartmentItems: PropTypes.array,
  handleCheckboxToggle: PropTypes.func,
  handleAmenityFilter: PropTypes.func,
  resetFilters: PropTypes.func,
  handleServicesFilter: PropTypes.func,
  selectedItems: PropTypes.array
};

export default CheckboxDropdown;