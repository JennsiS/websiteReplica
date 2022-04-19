import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './css/styles.css';
import starsBackground from './img/starBackground.jpg';

document.body.style.background = `url(${starsBackground})`;
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
