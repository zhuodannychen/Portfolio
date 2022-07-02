import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactGA from "react-ga4";

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
ReactGA.send("pageview");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//try {
    //setTimeout(_ => {
        //const ga4react = new GA4React(process.env.REACT_APP_GOOGLE_ANALYTICS);
        //ga4react.initialize().catch(err => console.error(err));
    //}, 4000);
    //console.log('GA working')
//} catch (err) {
    //console.error(err);
//}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
