import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/styles.scss';
import quoteImg from '../img/quote-marks.svg';
import authorImg from '../img/quote-roundel.jpg';

export default function Quote() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="section" id="quote">
      <div className="container">
        <div className="quote-box">
          <div className="quote-marks" data-aos="fade-up">
            <img src={quoteImg} alt="" className="quote-img" />
          </div>
          <div className="quote-text">
            As our understanding of space advances the opportunity
            to start a new world becomes ever more possible.
            Moving home or to another country is already
            incredibly exciting,. The challenges and problems would be new and hard but the mind
            boggles at the potential opportunities and what the human race could achieve
            if we take this next step.
            <span className="text-highlight">imagine what it would be like to move to an entirely different habitat</span>
          </div>
          <div className="author-img">
            <img src={authorImg} alt="" className="authorImg" />
            <h4>Prof. Lewis Dartnell</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
