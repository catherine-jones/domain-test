// import Hcard from './Hcard';
import React from 'react';
// import style from '../styles/HcardForm.scss';

class HcardForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <h2>Personal Details</h2>
        <hr/>
        <div className="form-group row">
          <div className="col-sm-6">
            <label htmlFor="givenName">Given Name</label>
            <input type="text" className="form-control" id="givenName"  value={this.state.givenName} onChange={this.handleChangeGivenName.bind(this)}></input>
          </div>
          <div className="col-sm-6">
            <label htmlFor="surname">Surname</label>
            <input type="text" className="form-control" id="surname" value={this.state.surname} onChange={this.handleChangeSurname.bind(this)}></input>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-6">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" value={this.state.email} onChange={this.handleChangeEmail.bind(this)}></input>
          </div>
          <div className="col-sm-6">
            <label htmlFor="phone">Phone</label>
            <input type="tel" className="form-control" id="phone" value={this.state.phone} onChange={this.handleChangePhone.bind(this)}></input>
          </div>
        </div>
        <h2>Address</h2>
        <hr/>

        <div className="form-group row">
          <div className="col-sm-6">
            <label htmlFor="house-name">House Name or #</label>
            <input type="text" className="form-control" id="house-name" value={this.state.houseName} onChange={this.handleChangeHouseName.bind(this)}></input>
          </div>
          <div className="col-sm-6">
            <label htmlFor="street">Street</label>
            <input type="text" className="form-control" id="street" value={this.state.street} onChange={this.handleChangeStreet.bind(this)}></input>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-6">
            <label htmlFor="suburb">Suburb</label>
            <input type="text" className="form-control" id="suburb" value={this.state.suburb} onChange={this.handleChangeSuburb.bind(this)}></input>
          </div>
          <div className="col-sm-6">
            <label htmlFor="state">State</label>
            <input type="text" className="form-control" id="state" value={this.state.state} onChange={this.handleChangeState.bind(this)}></input>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-6">
            <label htmlFor="post-code">Post Code</label>
            <input type="text" className="form-control" id="post-code" value={this.state.postCode} onChange={this.handleChangePostCode.bind(this)}></input>
          </div>
          <div className="col-sm-6">
            <label htmlFor="country">Country</label>
            <input type="text" className="form-control" id="country" value={this.state.country} onChange={this.handleChangeCountry.bind(this)}></input>
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-6">
            <button type="file" className="btn btn-primary avatar">Upload Avatar</button>
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
