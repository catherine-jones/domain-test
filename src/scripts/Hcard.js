import React from 'react';

class Hcard extends React.Component {
  render() {
    return (
      <article className="vcard card">
        <div className="container card-heading-group">
          <div className="row">
            <div className="col-sm-9">
              <h2 className="fn">
                <span className="given-name">Sam</span>
                <span className="family-name">Fairfax</span>
              </h2>
            </div>
            <div className="col-sm-3">
              <div className="photo">
                <img src="./assets/images/avatar.png" alt="avatar" />
              </div>
            </div>
          </div>
        </div>
        <address className="card-body">
          <div className="underline row">
            <div className="col-sm-3">
              <span className="title">Email: </span>
            </div>
            <div className="col-sm-9">
              <span className="email">sam.fairfax@fairfax.com</span>
            </div>
          </div>
          <div className="underline row">
            <div className="col-sm-3">
              <span className="title">Phone: </span>
            </div>
            <div className="col-sm-9">
              <span className="phone">0987656736</span>
            </div>
          </div>
          <div className="adr">
            <div className="underline row">
              <div className="col-sm-3">
                <span className="title">Address: </span>
              </div>
              <div className="col-sm-9">
                <span className="street-address">1 Darling Island road</span>
              </div>
            </div>
            <div className="underline row">
              <div className="offset-sm-3 col-sm-9">
                <span className="locality">Pyrmont </span>
                <span className="region">NSW</span>
              </div>
            </div>
            <div className="underline row">
              <div className="col-sm-3">
                <span className="title">Post Code: </span>
              </div>
              <div className="col-sm-2">
                <span className="postal-code">2009</span>
              </div>
              <div className="col-sm-3">
                <span className="title">Country: </span>
              </div>
              <div className="col-sm-4">
                <span className="country-name">Australia</span>
              </div>
            </div>
          </div>
        </address>
      </article>
    );
  }
}

export default Hcard;
