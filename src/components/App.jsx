import React from 'react';
import moonImg from '../img/moon-large.png';
import fullmoonImg from '../img/moon.png';
import earthImg from '../img/scene-earth.png';
import starsBackground from '../img/headerStars.jpg';

export default function App() {
  return (
    <>
      <div className="header-container" style={{ backgroundImage: `url(${starsBackground})` }}>
        <div className="initial-header">
          <h1 className="moontopia-title">MOONTOPIA</h1>
          <img src={moonImg} alt="" className="moon-image" />
          <img src={earthImg} alt="" className="earth-image-header" />
        </div>
      </div>
      <div className="black-section">
        <div className="black-container">
          <div className="black-section-text">
            <h3>WELCOME TO THE MOON</h3>
            <p>
              Often when we talk about living on other worlds,
              Mars tops the list of alternative options. But have
              we overlooked our neighbour the Moon? As the Moon
              is much closer to get to and offers valuable resources
              that we could mine and extract to send back to Earth,
              it’s a more viable option for a colony.
            </p>
            <p>
              In-home experts at Hillarys have teamed up with Professor
              Lewis Dartnell, University of Westminster, to imagine what
              life might be like 150 years from now, if we colonised the Moon.
              Lewis Dartnell is an esteemed Professor, presenter, research scientist
              and author who has published four books, with his latest already becoming
              a Sunday Times bestseller.
            </p>
          </div>
        </div>
      </div>
      <div id="ch1" className="div-section">
        <div className="flex-container">
          <div className="ch1-right">
            <div className="ch1-text">
              <h2>01. CHAPTER ONE</h2>
              <div className="ch1-scroll">
                <h3>Why would we go to the Moon?</h3>
                <p>
                  As resources start to dry up on Earth, the need for us to
                  look further afield for the things we use becomes less of
                  a fantasy.
                </p>
                <p>
                  Living on other planets has long been a fascination of sci-fi films and
                  novels, but as technology advances, it is fast becoming a potential reality.
                  The human race has not put anyone on the Moon since 1972 and NASA, Elon Musk
                  and China are all racing to get back there and take it to the next level.
                </p>
                <p>
                  The Moon is so close to the Earth we would be able to travel back to get
                  more resources. We have proven it is possible to get to the Moon and the
                  time may have come to take advantage of that giant leap.
                </p>
              </div>
            </div>
          </div>
          <div className="ch1-left">
            <div className="elements">
              <img src={earthImg} alt="" className="earth-image-ch1" />
              <img src={fullmoonImg} alt="" className="fullmoon-image" />
            </div>
          </div>
        </div>
      </div>
      <div id="ch2" className="blue-section">
        <div className="div-section">
          <div className="ch2-header">
            <h2>02. CHAPTER TWO</h2>
            <h3>WHAT WOULD IT BE LIKE TO LIVE ON THE MOON?</h3>
          </div>
          <div className="article-container">
            <div className="article-column">
              <p>
                <span className="capital-letter">T</span>
                he hardest obstacles to overcome on the Moon are the lack of atmosphere
                and inhospitable surface. Cosmic radiation, micrometeorites, lack of atmosphere
                and extreme temperatures mean that living on the Moon would be a huge challenge.
              </p>
              <p>
                However, the Moon used to be volcanically active, meaning there
                are large numbers of lunarlava tubes present. These lava tubes
                formed naturally over time- as molten lava flowed,
                cooled and solidified on the outside while continuing to move in the centre.
              </p>
              <p>
                If we made a home for ourselves in lunar lava tubes we would have to
                adapt to living completely underground.
              </p>
              <p>
                Lunar lava tubes can be over a kilometre wide and tall enough to
                comfortably fit a multi-story building. This means they would be plenty big
                enough for us to start building cities inside. In order to make
                these tubes habitable, they would need to be sealed at both ends and pressurised
                to provide a breathable air for theinhabitants. Citizens of the moon could move
                around freely, without spacesuits.
              </p>
            </div>
            <div className="article-column">
              <p>
                In order to be able to leave the colony a space suit would be essential.
                Those leaving would exit the colony through an airlock and take a lift up
                through a natural skylight in the lava tube to the lunar surface.
              </p>
              <p>
                Something which may feel familiar to some of the population will be the
                ‘lunarquakes’ which occur on the surface. This would provide a challenge
                to us in terms of buildings and being underground. Luckily, earthquake
                proofing buildings has come a long way and we would be able to apply that
                knowledge to all the buildings in our colony.
              </p>
              <p>
                As we know this is a risk before we even get to the moon, we would be able
                to plan the city accordingly. Leaving enough space between buildings and
                creating safe zones for particularly bad ones.
              </p>
              <p>
                We would have to get used to a complete change in diet, gravity, light,
                temperature and power sources. Living on the Moon would not be for the
                faint hearted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
