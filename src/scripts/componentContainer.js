import React from 'react';
import Hcard from './Hcard';
import HcardForm from './HcardForm';

class ComponentContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChangeSurname(event){
    this.setState({surname: event.target.value})
  }

  handleChangeGivenName(event){
    console.log(this.state)
    this.setState({givenName: event.target.value})
  }

  handleChangeEmail(event){
    this.setState({email: event.target.value})
  }

  handleChangePhone(event){
    this.setState({phone: event.target.value})
  }

  handleChangeHouseName(event){
    this.setState({houseName: event.target.value})
  }

  handleChangeStreet(event){
    this.setState({street: event.target.value})
  }

  handleChangeSuburb(event){
    this.setState({suburb: event.target.value})
  }

  handleChangeState(event){
    this.setState({state: event.target.value})
  }

  handleChangePostCode(event){
    this.setState({postCode: event.target.value})
  }

  handleChangeCountry(event){
    this.setState({country: event.target.value})
  }

  render() {
    return (
      <div className="row row-eq-height">
        <div className="col-xs-12 col-sm-12 col-lg-6">
          <div className="row">
            <div className="col-sm-12">
              <h1>hCard Builder</h1>
            </div>
          </div>
          <div className="row">
            <div id="form-container" className="col-sm-12">
              <HcardForm
              handleChangeGivenName={this.handleChangeGivenName.bind(this)}
              handleChangeSurname={this.handleChangeSurname.bind(this)}
              handleChangeEmail={this.handleChangeEmail.bind(this)}
              handleChangePhone={this.handleChangePhone.bind(this)}
              handleChangeHouseName={this.handleChangeHouseName.bind(this)}
              handleChangeStreet={this.handleChangeStreet.bind(this)}
              handleChangeSuburb={this.handleChangeSuburb.bind(this)}
              handleChangeState={this.handleChangeState.bind(this)}
              handleChangePostCode={this.handleChangePostCode.bind(this)}
              handleChangeCountry={this.handleChangeCountry.bind(this)}
              />
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-lg-6 card-column">
          <div className="row flex-row">
            <div className="vertically-center">
              <div className="col-sm-12">
                <h3>hcard preview</h3>
              </div>
              <div id="card-container" className="col-sm-12 ">
                <Hcard
                givenName={this.state.givenName}
                surname={this.state.surname}
                email={this.state.email}
                phone={this.state.phone}
                houseName={this.state.houseName}
                street={this.state.street}
                suburb={this.state.suburb}
                state={this.state.state}
                postCode={this.state.postCode}
                country={this.state.country}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ComponentContainer;
