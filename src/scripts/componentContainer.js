import React from 'react';
import Hcard from './Hcard';
import HcardForm from './HcardForm';

class ComponentContainer extends React.Component {
  render() {
    return (
      <div className="row row-eq-height">
        <div className="col-sm-6 col-md-12 col-lg-6">
          <div className="row">
            <div className="col-sm-12">
              <h1>hCard Builder</h1>
            </div>
          </div>
          <div className="row">
            <div id="form-container" className="col-sm-12">
              <HcardForm/>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-12 col-lg-6 card-column">
          <div className="row flex-row">
            <div className="vertically-center">
              <div className="col-sm-12">
                <h3>hcard preview</h3>
              </div>
              <div id="card-container" className="col-sm-12 ">
                <Hcard/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ComponentContainer;
