import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";

import ApartmentAmentityView from "./ApartmentAmentityView";
import Header from "./HeaderView";

class ApartmentView extends React.Component {
  componentWillMount() {
    const { match: { params } } = this.props;
    const { apartmentId } = params;
    this.props.fetchApartment(apartmentId);
  }

  render() {
    const { apartment } = this.props;
    if (!Object.keys(apartment).length) {
      return (
        <div className="loader">
          <Loader type="Oval" color="#00BFFF" height="100" width="100" />
        </div>
      );
    }
    const image = `http://localhost:5000/images/apartments/${
      apartment.images[0]
    }`;
    return (
      <Fragment>
        <Header />
        <div className="container-fl clearfix">
          <div className="col-12">
            <div className="view-apartment">
              <div className="view-apartment-item">
                <div className="view-apartment-item-content">
                  <div className="_3im4pDXrDfzNRT2AlvLfD6 apartment-view">
                    <div className="listing-image">
                      <div
                        className="media-cover"
                        style={{
                          backgroundImage: `url(${image})`,
                          backgroundSize: "contain",
                        }}
                      />
                      <div className="_3Ts2_4uirKsrlm2Qb57Avw" />
                      <div className="Ok22VaqPDW9x1uaR46cRO _3ORDzmMDnpzTXIIXjJsRw7">
                        <span>{`${apartment.price} €`}</span>
                        <span className="_17Hci6D5EewOTY42eIXhPy">
                          <span className="_2GcdOjvYR400SpIsNOxzGK">/</span>
                          <span>Monat</span>
                        </span>
                      </div>
                    </div>
                    <div className="listing-details-container">
                      <div className="listing-details">
                        <div className="_3-hUUH6d0vGND3vUzaybD0 Lsdn2hC-tehVod76x4HzK">
                          <span className="text-truncate text-first-capitalize _1NES5HH5UNUjUVK5_-d-AG owned-by">
                            {`Owned by: ${apartment.owner.email}`}
                          </span>
                        </div>
                        <div className="_3-hUUH6d0vGND3vUzaybD0 Lsdn2hC-tehVod76x4HzK">
                          <span className="text-truncate text-first-capitalize _1NES5HH5UNUjUVK5_-d-AG">
                            {apartment.title}
                          </span>
                        </div>
                        <div className="_17om8IEGFeu2W2TBOJ6xQs Lsdn2hC-tehVod76x4HzK text-truncate">
                          <span>{`${apartment.size} m²`}</span>
                        </div>
                        <div className="f9YmKwMaSOdtYnk_Qz-iT">
                          <div className="dVjtBg_ihJ63cZB8GwE0g text-truncate">
                            <ApartmentAmentityView
                              apartment={apartment}
                              limit="20"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ApartmentView;

ApartmentView.propTypes = {
  match: PropTypes.object.isRequired,
  apartment: PropTypes.object.isRequired,
  fetchApartment: PropTypes.func.isRequired,
};
