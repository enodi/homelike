import React from "react";
import PropTypes from "prop-types";

const RangeSlider = ({
  label,
  min,
  max,
  handleSizeFilter,
  resetFilters,
  rangeValue,
  handleSizeToggle,
  handlePriceToggle,
  handlePriceFilter }) => (
  <div className="range__dropdown">
    <button className="range__dropbtn">{label} 
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="range__dropdown-content">
      { label.toLowerCase() === "size"
        ?
        <div>
          <p>{label}</p>
          <p>

            <span>{rangeValue} m<sup>2</sup></span> - 
            <span>{max} m<sup>2</sup></span>
          </p>
          <input type="range" value={rangeValue} min={min} max={max} onChange={handleSizeToggle}/>
        </div>
        :
        <div>
          <p>{label}</p>
          <p>
            <span>{rangeValue} £</span> - 
            <span>{max} £</span>
          </p>
          <input type="range" value={rangeValue} min={min} max={max} onChange={handlePriceToggle}/>
        </div>
      }
      <div className="filter-buttons">
        <button className="reset-button" onClick={resetFilters}>Reset Filter</button>
        { label.toLowerCase() === "size"
          ?
          <button className="apply-button" onClick={handleSizeFilter}>Apply</button>
          :
          <button className="apply-button" onClick={handlePriceFilter}>Apply</button>
        }
      </div>
    </div>
  </div>
);

RangeSlider.propTypes = {
  label: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  handleSizeFilter: PropTypes.func,
  resetFilters: PropTypes.func,
  handlePriceFilter: PropTypes.func,
  rangeValue: PropTypes.any,
  handleSizeToggle: PropTypes.func,
  handlePriceToggle: PropTypes.func
};

export default RangeSlider;