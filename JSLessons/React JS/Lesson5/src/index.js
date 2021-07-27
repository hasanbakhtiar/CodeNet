import React from 'react';
import ReactDOM from 'react-dom';


// Style Files Start
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './sass/style.css';
// Style Files End


// Component Files Start
import App from './components/App';
// Component Files End


ReactDOM.render(<App /> ,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

