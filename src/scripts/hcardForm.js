// import Hcard from './Hcard';
import React from 'react';
// import style from '../styles/HcardForm.scss';

class HcardForm extends React.Component {

  render() {
    return (
      <form>
        <h2>Personal Details</h2>
        <hr/>
        <div className="form-group row">
          <div className="col-sm-6">
            <label htmlFor="givenName">Given Name</label>
            <input type="text" className="form-control" id="givenName"></input>
          </div>
          <div className="col-sm-6">
            <label htmlFor="surname">Surname</label>
            <input type="text" className="form-control" id="surname"></input>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-6">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email"></input>
          </div>
          <div className="col-sm-6">
            <label htmlFor="phone">Phone</label>
            <input type="tel" className="form-control" id="phone"></input>
          </div>
        </div>
        <h2>Address</h2>
        <hr/>

        <div className="form-group row">
          <div className="col-sm-6">
            <label htmlFor="house-name">House Name or #</label>
            <input type="text" className="form-control" id="house-name"></input>
          </div>
          <div className="col-sm-6">
            <label htmlFor="street">Street</label>
            <input type="text" className="form-control" id="street"></input>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-6">
            <label htmlFor="suburb">Suburb</label>
            <input type="text" className="form-control" id="suburb"></input>
          </div>
          <div className="col-sm-6">
            <label htmlFor="state">State</label>
            <input type="text" className="form-control" id="state"></input>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-6">
            <label htmlFor="post-code">Post Code</label>
            <input type="text" className="form-control" id="post-code"></input>
          </div>
          <div className="col-sm-6">
            <label htmlFor="country">Country</label>
            <input type="text" className="form-control" id="country"></input>
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-6">
            <button type="file" className="btn btn-primary">Upload Avatar</button>
          </div>
          <div className="col-sm-6">
            <button type="submit" className="btn btn-primary">Create Hcard</button>
          </div>
        </div>
      </form>
    )
  }
}

export default HcardForm;
