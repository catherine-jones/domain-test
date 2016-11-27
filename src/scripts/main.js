
import React from 'react';
import ReactDOM from 'react-dom';
import HcardForm from './HcardForm';
import Hcard from './Hcard';


ReactDOM.render(<HcardForm/>, document.getElementById('form-container'));
ReactDOM.render(<Hcard/>, document.getElementById('card-container'));
