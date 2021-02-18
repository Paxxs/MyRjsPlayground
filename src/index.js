import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider, teamsTheme } from '@fluentui/react-northstar'
import { initializeIcons } from '@fluentui/react'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

initializeIcons()

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider theme={teamsTheme}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
