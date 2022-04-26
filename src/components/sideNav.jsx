import React from 'react';
import closeImg from '../img/close.svg';
import '../css/styles.scss';

export default function sideNav() {
  function hideMenu() {
    // document.getElementById('menu').style.display = 'none';
    document.getElementById('menu-button').style.display = 'flex';
    document.getElementById('menu').style.right = '-70%';
  }
  return (
    <div className="nav" id="menu">
      <div className="close">
        <button type="button" onClick={hideMenu}>
          <img src={closeImg} alt="" />
        </button>
      </div>
      <div className="menu-sections">
        <a href="#ch1">
          <h2>CHAPTER ONE</h2>
          <h3>WHY WOULD WE GO TO THE MOON?</h3>
        </a>
        <a href="#ch2">
          <h2>CHAPTER TWO</h2>
          <h3>WHAT WOULD IT BE LIKE TO LIVE ON THE MOON?</h3>
        </a>
        <a href="#ch3">
          <h2>CHAPTER THREE</h2>
          <h3>LAVA TUBE FORMATION</h3>
        </a>
        <a href="#ch4">
          <h2>CHAPTER FOUR</h2>
          <h3>WHAT WOULD OUR COLONY LOOK LIKE?</h3>
        </a>
        <a href="#ch6">
          <h2>BIBLIOGRAPHY</h2>
          <h3>PAGE SOURCES</h3>
        </a>
      </div>
    </div>
  );
}
