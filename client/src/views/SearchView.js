import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { uniqueId } from "lodash";
import Loader from "react-loader-spinner";

import ApartmentTileView from "./ApartmentTileView";
import Header from "./HeaderView";
import FilterControls from "../components/FilterControls";


const SearchView = ({
  apartmentsForLocation,
  fetchApartmentsListForLocation,
  match,
  locations,
  fetchLocationsList
}) => {
  const [rangeValue, setRangeValue] = useState(0);
  const [apartmentItems, setApartmentItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [roomCount, setRoomCount] = useState(0);
  const [bedroomCount, setBedroomCount] = useState(0);
  const [floorCount, setFloorCount] = useState(0);
  const [bathroomCount, setBathroomCount] = useState(0);
  
  useEffect(() => {
    const { locationId } = match.params;
    fetchLocationsList();
    fetchApartmentsListForLocation(locationId);
  }, []);

  useEffect(() => {
    if (apartmentsForLocation.items) {
      setApartmentItems(apartmentsForLocation.items);
    }
  }, [apartmentsForLocation, setApartmentItems]);

  const handleCheckboxToggle = (event) => {
    const { value } = event.target;

    if (selectedItems.includes(value)) {
      setSelectedItems(selectedItems.filter(item => item !== value));
    } else {
      setSelectedItems([...selectedItems, value]);
    } 
  };

  const handleSizeToggle = (event) => {
    setRangeValue(event.target.value);
  };

  const handleSizeFilter = () => {
    let filteredItems = [];
    apartmentsForLocation.items.map(item => {
      if (Number(item.size) === Number(rangeValue)) {
        filteredItems.push(item);
      }
    });
    setApartmentItems(filteredItems);
  };

  const handlePriceToggle = (event) => {
    setRangeValue(event.target.value);
  };

  const handlePriceFilter = () => {
    let filteredItems = [];
    apartmentsForLocation.items.map(item => {
      if (Number(item.price) === Number(rangeValue)) {
        filteredItems.push(item);
      }
    });
    setApartmentItems(filteredItems);
  };

  const handleAmenityFilter = () => {
    const searchedItems = [];
    apartmentsForLocation.items.map(item => {
      if ((item.amenities.sort().toString()).indexOf(selectedItems.sort().toString()) > -1 ){
        searchedItems.push(item);
      }
    });
    setApartmentItems(searchedItems); 
  };

  const handleServicesFilter = () => {
    const searchedItems = [];
    apartmentsForLocation.items.map(item => {
      if ((item.services.sort().toString()).indexOf(selectedItems.sort().toString()) > -1 ){
        searchedItems.push(item);
      }
    });
    setApartmentItems(searchedItems); 
  };

  const handleRoomsFilter = () => {
    let filteredItems = [];
    apartmentsForLocation.items.map(item => {
      if (Number(item.details.rooms) === Number(roomCount)) {
        filteredItems.push(item);
      }
    });
    setApartmentItems(filteredItems);
  };

  const IncrementRoomsCount = () => {
    setRoomCount(roomCount + 1);
  };

  const DecrementRoomsCount = () => {
    setRoomCount(roomCount - 1);
  };

  const handleBedroomFilter = () => {
    let filteredItems = [];
    apartmentsForLocation.items.map(item => {
      if (Number(item.details.bedrooms) === Number(bedroomCount)) {
        filteredItems.push(item);
      }
    });
    setApartmentItems(filteredItems);
  };

  const IncrementBedroomCount = () => {
    setBedroomCount(bedroomCount + 1);
  };

  const DecrementBedroomCount = () => {
    setBedroomCount(bedroomCount - 1);
  };

  const handleFloorFilter = () => {
    let filteredItems = [];
    apartmentsForLocation.items.map(item => {
      if (Number(item.details.floor) === Number(floorCount)) {
        filteredItems.push(item);
      }
    });
    setApartmentItems(filteredItems);
  };

  const IncrementFloorCount = () => {
    setFloorCount(floorCount + 1);
  };

  const DecrementFloorCount = () => {
    setFloorCount(floorCount - 1);
  };

  const handleBathroomFilter = () => {
    let filteredItems = [];
    apartmentsForLocation.items.map(item => {
      if (Number(item.details.bathrooms) === Number(bathroomCount)) {
        filteredItems.push(item);
      }
    });
    setApartmentItems(filteredItems);
  };

  const IncrementBathroomCount = () => {
    setBathroomCount(bathroomCount + 1);
  };

  const DecrementBathroomCount = () => {
    setBathroomCount(bathroomCount - 1);
  };

  const resetFilters = () => {
    setApartmentItems(apartmentsForLocation.items);
    setSelectedItems([]);
    setRoomCount(0);
    setBedroomCount(0);
    setFloorCount(0);
  };

  const locationTitle = () => {
    const { locationId } = match.params;
    const [currentLocation] = locations.filter(
      location => location._id === locationId,
    );
    return currentLocation.title;
  };

  if (!Object.keys(apartmentsForLocation).length) {
    return (
      <div className="loader">
        <Loader type="Oval" color="#00BFFF" height="100" width="100" />
      </div>
    );
  }

  return (
    <Fragment>
      <Header />
      <div className="container-list container-lg clearfix">
        <FilterControls
          handleCheckboxToggle={handleCheckboxToggle}
          handleSizeFilter={handleSizeFilter}
          handlePriceFilter={handlePriceFilter}
          selectedItems={selectedItems}
          rangeValue={rangeValue}
          handleAmenityFilter={handleAmenityFilter}
          resetFilters={resetFilters}
          handleServicesFilter={handleServicesFilter}
          handleSizeToggle={handleSizeToggle}
          handlePriceToggle={handlePriceToggle}
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
        <h1 className="location">{locationTitle()}</h1>
        <div className="location-wrapper">
          <div className="view-apartment-list location-item">
            {
              apartmentItems.map(item => (
                <ApartmentTileView key={uniqueId()} apartment={item}/>
              ))
            }
            
          </div>
        </div>
      </div>
    </Fragment>
  );
};

SearchView.propTypes = {
  apartmentsForLocation: PropTypes.object,
  fetchApartmentsListForLocation: PropTypes.func,
  match: PropTypes.object,
  locations: PropTypes.array,
  fetchLocationsList: PropTypes.func
};

export default SearchView;