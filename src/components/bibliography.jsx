import React from 'react';
import closeImg from '../img/close.svg';
import '../css/styles.scss';
import authorImg from '../img/quote-roundel.jpg';

export default function bibliography() {
  function hideResources() {
    // document.getElementById('bibliography').style.display = 'none';
    document.getElementById('bibliography').style.opacity = '0';
    document.getElementById('bibliography').style.bottom = '-100%';
  }
  return (
    <div className="bibliography-container" id="bibliography">
      <div className="inner-container">
        <button type="button" onClick={hideResources}>
          <img src={closeImg} alt="" />
        </button>
        <div className="right-modal">
          <div className="biography">
            <div className="bio-content">
              <div>
                <img src={authorImg} alt="" className="quote-img" />
                <h3>
                  PROF. LEWIS DARTNELL IS A RESEARCH SCIENTIST,
                  PRESENTER AND AUTHOR BASED IN LONDON, UK.
                </h3>
                <p>
                  After graduating from Oxford University with a First Class
                  degree in Biological Sciences, Dartnell completed a PhD at
                  University College London in 2007. He now holds a Professorship
                  in Science Communication at the University of Westminster.
                  Professor Dartnell’s research is in the field of astrobiology
                  and the search for microbial life on Mars. He delivers
                  live events at schools and science festivals. Working as a scientific
                  consultant for the media, Lewis has also appeared in numerous
                  TV documentaries and radio shows.
                </p>
                <p>
                  Lewis has won several awards for his science writing and outreach work.
                  He regularly freelances for newspapers and magazine articles.
                  He has published four books. His latest ‘ORIGINS: How the Earth Made Us’ was
                  a Sunday Times Bestseller.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bibliography-content">
          <h3>BIBLIOGRAPHY</h3>
          <ul>
            <li>
              <a href="http://lewisdartnell.com/en-gb/">http://lewisdartnell.com/en-gb/</a>
            </li>
            <li>https://www.nasa.gov/</li>
            <li>https://www.spacex.com/</li>
            <li>https://www.tesla.com/en_GB/elon-musk/</li>
            <li>https://nineplanets.org/luna.html/</li>
            <li>
              https://www.bbc.co.uk/news/topics/
              <br />
              cnx753jexz0t/the-moon/
            </li>
            <li>
              https://nuclear.duke-energy.com/2013/01/30/
              <br />
              fission-vs-fusion-whats-the-difference/
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}
