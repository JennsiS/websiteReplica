import React from 'react';
import moonImg from '../img/moon-large.png';
import earthImg from '../img/scene-earth.png';
import starsBackground from '../img/headerStars.jpg';
import '../css/styles.scss';

export default function Header() {
  return (
    <div className="header-container" style={{ backgroundImage: `url(${starsBackground})` }}>
      <div className="initial-header">
        <h1 className="moontopia-title">MOONTOPIA</h1>
        <img src={moonImg} alt="" className="moon-image" />
        <img src={earthImg} alt="" className="earth-image-header" />
      </div>
    </div>
  );
}
