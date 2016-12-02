import React from 'react';

class Hcard extends React.Component {
  render() {
    return (
      <article className="vcard card">
        <div className="container card-heading-group">
          <div className="row">
            <div className="col-sm-9 col-xs-8">
              <span className="fn name-heading">
                <span className="given-name">{this.props.givenName}</span>
                <span className="family-name">{this.props.surname}</span>
              </span>
            </div>
            <div className="col-sm-3 col-xs-4">
              <div className="photo">
                <img src="./images/avatar.png" alt="avatar"/>
              </div>
            </div>
          </div>
        </div>
        <address className="card-body">
          <div className="underline row">
            <div className="col-sm-3 col-xs-4">
              <span className="title">Email:</span>
            </div>
            <div className="col-sm-9 col-xs-8">
              <span className="email">{this.props.email}</span>
            </div>
          </div>
          <div className="underline row">
            <div className="col-sm-3 col-xs-4">
              <span className="title">Phone:</span>
            </div>
            <div className="col-sm-9 col-xs-8">
              <span className="phone">{this.props.phone}</span>
            </div>
          </div>
          <div className="adr">
            <div className="underline row">
              <div className="col-sm-3 col-xs-4">
                <span className="title">Address:</span>
              </div>
              <div className="col-sm-9 col-xs-8">
                <span className="house-name">{this.props.houseName}</span>
                <span className="street-address">{this.props.street}</span>
              </div>
            </div>
            <div className="underline row">
              <div className="second-address-row offset-sm-3 col-sm-9 offset-xs-4 col-xs-8">
                <span className="locality">{this.props.suburb}</span>
                <span className="region">{this.props.state}</span>
              </div>
            </div>
            <div className="underline row">
              <div className="col-sm-3 col-xs-4">
                <span className="title">Post Code:</span>
              </div>
              <div className="col-sm-2 col-xs-8">
                <span className="postal-code">{this.props.postCode}</span>
              </div>
              <div className="col-sm-3 col-xs-4">
                <span className="title">Country:</span>
              </div>
              <div className="col-sm-4 col-xs-8">
                <span className="country-name">{this.props.country}</span>
              </div>
            </div>
          </div>
        </address>
      </article>
    );
  }
}

export default Hcard;
