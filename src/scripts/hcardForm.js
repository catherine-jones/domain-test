import React from 'react';
import ImageUpload from './imageUpload';

class HcardForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <form onSubmit={(e)=>this._handleSubmit(e)}>
        <h2>Personal Details</h2>
        <hr/>
        <div className="form-group row">
          <div className="col-sm-6">
            <label htmlFor="givenName">Given Name</label>
            <input type="text" className="form-control" id="givenName"  value={this.state.givenName} onChange={this.props.handleChangeGivenName.bind(this)}></input>
          </div>
          <div className="col-sm-6">
            <label htmlFor="surname">Surname</label>
            <input type="text" className="form-control" id="surname" value={this.state.surname} onChange={this.props.handleChangeSurname.bind(this)}></input>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-6">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" value={this.state.email} onChange={this.props.handleChangeEmail.bind(this)}></input>
          </div>
          <div className="col-sm-6">
            <label htmlFor="phone">Phone</label>
            <input type="tel" className="form-control" id="phone" value={this.state.phone} onChange={this.props.handleChangePhone.bind(this)}></input>
          </div>
        </div>
        <h2>Address</h2>
        <hr/>

        <div className="form-group row">
          <div className="col-sm-6">
            <label htmlFor="house-name">House Name or #</label>
            <input type="text" className="form-control" id="house-name" value={this.state.houseName} onChange={this.props.handleChangeHouseName.bind(this)}></input>
          </div>
          <div className="col-sm-6">
            <label htmlFor="street">Street</label>
            <input type="text" className="form-control" id="street" value={this.state.street} onChange={this.props.handleChangeStreet.bind(this)}></input>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-6">
            <label htmlFor="suburb">Suburb</label>
            <input type="text" className="form-control" id="suburb" value={this.state.suburb} onChange={this.props.handleChangeSuburb.bind(this)}></input>
          </div>
          <div className="col-sm-6">
            <label htmlFor="state">State</label>
            <input type="text" className="form-control" id="state" value={this.state.state} onChange={this.props.handleChangeState.bind(this)}></input>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-6">
            <label htmlFor="post-code">Post Code</label>
            <input type="text" className="form-control" id="post-code" value={this.state.postCode} onChange={this.props.handleChangePostCode.bind(this)}></input>
          </div>
          <div className="col-sm-6">
            <label htmlFor="country">Country</label>
            <input type="text" className="form-control" id="country" value={this.state.country} onChange={this.props.handleChangeCountry.bind(this)}></input>
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-6">
            <ImageUpload/>
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
