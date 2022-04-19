import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/styles.css';
import starsBackground from './img/starBackground.jpg';

document.body.style.background = `url(${starsBackground})`;
ReactDOM.render(<App />, document.body);
