import React from 'react';
import ReactDOM from 'react-dom';
import ComponentContainer from './ComponentContainer';
import HcardForm from './HcardForm';
import Hcard from './Hcard';
import style from '../styles/main.scss';

ReactDOM.render(<ComponentContainer/>, document.getElementById('app'));

ReactDOM.render(<HcardForm/>, document.getElementById('form-container'));
ReactDOM.render(<Hcard/>, document.getElementById('card-container'));
