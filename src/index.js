import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Inputs from './components/inputs/inputs';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Inputs />, document.getElementById('inputs'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
