import React from 'react';

class Hcard extends React.Component {
  render() {
    return (
      <article className="vcard card">
        <div className="container card-heading-group">
          <div className="row">
            <div className="col-sm-9 col-xs-8">
              <h2 className="fn">
                <span className="given-name" value={this.props.surname}></span>
                <span className="family-name" value={this.props.givenName}></span>
              </h2>
            </div>
            <div className="col-sm-3 col-xs-4">
              <div className="photo">
                <img src="./images/avatar.png" alt="avatar" />
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
              <span className="email" value={this.props.email}></span>
            </div>
          </div>
          <div className="underline row">
            <div className="col-sm-3 col-xs-4">
              <span className="title">Phone:</span>
            </div>
            <div className="col-sm-9 col-xs-8">
              <span className="phone" value={this.props.phone}></span>
            </div>
          </div>
          <div className="adr">
            <div className="underline row">
              <div className="col-sm-3 col-xs-4">
                <span className="title">Address: </span>
              </div>
              <div className="col-sm-9 col-xs-8">
                <span className="street-address" value={this.props.street}></span>
              </div>
            </div>
            <div className="underline row">
              <div className="offset-sm-3 col-sm-9 offset-xs-4 col-xs-8">
                <span className="locality" value={this.props.suburb}></span>
                <span className="region" value={this.props.state}></span>
              </div>
            </div>
            <div className="underline row">
              <div className="col-sm-3 col-xs-4">
                <span className="title">Post Code:</span>
              </div>
              <div className="col-sm-2 col-xs-8">
                <span className="postal-code" value={this.props.postCode}></span>
              </div>
              <div className="col-sm-3 col-xs-4">
                <span className="title">Country:</span>
              </div>
              <div className="col-sm-4 col-xs-8">
                <span className="country-name" value={this.props.country}></span>
              </div>
            </div>
          </div>
        </address>
      </article>
    );
  }
}

export default Hcard;
