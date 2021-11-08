//Import React into application
import React from 'react';
//Imports ReactDOM into application
import ReactDOM from 'react-dom';
//imports App component
import App from './App';
//Imports reportWebVitals to measure performance the app
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* Bringing in App component */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
