import React from 'react';
import fullmoonImg from '../img/moon.png';
import earthImg from '../img/scene-earth.png';
import lava1 from '../img/lava1.png';
import lava2 from '../img/lava2.png';
import lava3 from '../img/lava3.png';
import surfaceImg from '../img/surface.jpg';
import cityImg from '../img/city.jpg';
import moonMan from '../img/spaceman.jpg';
import hillarysLogo from '../img/hillarys-logo.svg';
import fbLogo from '../img/fb.svg';
import twitterLogo from '../img/tw.svg';
import whatssapLogo from '../img/wa.svg';
import lines from '../img/lines.png';
import Header from './Header';
import Quote from './Quote';
import Menu from './sideNav';
import Bibliography from './bibliography';
import Modals from './Modals';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.scss';

export default function App() {
  function showMenu() {
    document.getElementById('menu').style.display = 'block';
    document.getElementById('menu-button').style.display = 'none';
  }
  function showBibliography() {
    document.getElementById('bibliography').style.display = 'block';
  }
  function showHarvesting() {
    document.getElementById('harvestingModal').style.display = 'block';
  }
  function showHazards() {
    document.getElementById('hazardsModal').style.display = 'block';
  }
  function showLift() {
    document.getElementById('liftModal').style.display = 'block';
  }
  function showTemperature() {
    document.getElementById('temperatureModal').style.display = 'block';
  }
  function showFarming() {
    document.getElementById('farmingModal').style.display = 'block';
  }
  function showBreathing() {
    document.getElementById('breathingModal').style.display = 'block';
  }
  function showExercise() {
    document.getElementById('exerciseModal').style.display = 'block';
  }
  function showEnergy() {
    document.getElementById('energyModal').style.display = 'block';
  }

  return (
    <>
      <Menu />
      <Header />

      <div className="menu-button" id="menu-button">
        <button type="button" onClick={showMenu}>
          <img alt="" src={lines} />
        </button>
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
        <div className="container">
          <div className="article-header" id="ch2-header">
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

      <div id="ch3" className="lava-black">
        <div className="section-flex">
          <div className="article-left">
            <div className="lava-formation-text">
              <h2>03. CHAPTER THREE</h2>
              <div>
                <h3>LAVA TUBE FORMATION</h3>
                <p>
                  Lava flows from volcanic eruptions and becomes channelled into streams.
                </p>
                <p>
                  The overflow of these streams often cools and solidifies while the rest of
                  the lava continues running; this creates stacked layers of rock around the
                  lava flow.
                </p>
                <p>
                  After a long period of time the lava begins to melt down into the ground,
                  creating a taller tube shape which becomes narrower.
                </p>
                <p>
                  A solid crust forms overhead and encases the tube. The lava within the tube
                  is now well insulated, meaning it can travel for long distances and create
                  incredibly long lava tubes.
                </p>
                <p>
                  Once the eruption is over, the flows harden and these tubes often become caves.
                </p>
              </div>
            </div>
          </div>
          <div className="lava-containers">
            <div className="article-right" data-aos="fade-in">
              <div className="lava-tubes">
                <img src={lava1} alt="" className="lava1" />
                <img src={lava2} alt="" className="lava2" />
                <img src={lava3} alt="" className="lava3" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modals />
      <div id="ch4" className="div-section">
        <div className="flex-container">
          <div className="ch1-right">
            <div className="ch1-text">
              <h2>04. CHAPTER FOUR</h2>
              <div className="ch1-scroll">
                <h3>What would our colony look like?</h3>
                <p>
                  Cosmic radiation, micrometeorites, lack of atmosphere and extreme
                  temperatures are not only reasons why we would have to live underground,
                  they would also be the biggest obstacles for those trying to carry out
                  tasks on the surface of the Moon.
                </p>
                <p>
                  As exciting as living on the Moon may sound, it would mean a massive
                  adjustment to the way we live. Members of the colony would be confined to
                  a relatively small city space, with a small population. The inability to
                  leave the colony without great preparation and risk, could cause colony
                  members to feel claustrophobic meaning there may be opportunities for members
                  of the colony to visit their families on Earth and vice versa.
                </p>
                <p>
                  Space X are pioneering space tourism with reusable launch systems, meaning
                  there may opportunities for members of the colony to visit their families
                  on Earth and vice versa.
                </p>
                <p>
                  The Moon’s day is a month, meaning that for 14 days it is bright daylight
                  and then for the next 14 days it is pitch black. In order to stop everyone
                  on the colony struggling with their sleeping patterns, the light would be
                  regulated within the lava tube to replicate Earth’s day cycle.
                </p>
                <p>
                  The artificial sunlight tubes would provide different types of light
                  throughout the day and help aid sleeping by mimicking sunrises and sunsets.
                  There would evenbe the ‘golden hour’ in the evening for the more selfie
                  conscious among the colony.
                </p>
              </div>
            </div>
          </div>
          <div className="ch1-left caption">
            <div className="bubbles">
              <button type="button" onClick={showHarvesting}>
                <div className="bubble harvesting-bubble" />
              </button>
              <button type="button" onClick={showHazards}>
                <div className="bubble hazards-bubble" />
              </button>
              <button type="button" onClick={showLift}>
                <div className="bubble lift-bubble" />
              </button>
            </div>
            <img src={surfaceImg} alt="" className="surface-img" />
          </div>
        </div>
      </div>

      <div id="ch5" className="city-section">
        <div className="flex-container">
          <div className="article-left">
            <div className="article-scroll">
              <h2> </h2>
              <div className="scrollable-text">
                <p>
                  We would have the opportunity to build a city from scratch and we could
                  draw on our experiences across the world to create a more harmonious
                  living space. The colony would have a large park in the centre, for
                  aesthetic and practical reasons. It would be a recreation ground for the
                  citizens of the colony and the trees and plants would help
                  produce oxygen for the citizens.
                </p>
                <p>
                  Buildings facing the large park would be arranged with shortest at the
                  front, getting progressively taller towards the back, as the lighting tubes
                  creating the artificial sunlight would run down the middle of the city.
                  This feature would also enable as many people as possible to see the greenery.
                </p>
                <p>
                  There would be little to no transport on the Moon colony, because of the
                  relatively small size of the city we would mostly travel around by walking.
                  This would help to reduce the amount of energy we required and we could use
                  electric pods of bicycles.
                </p>
              </div>
            </div>
          </div>
          <div className="city img-ch5">
            <div className="bubbles">
              <button type="button" onClick={showTemperature}>
                <div className="bubble temperature-bubble" />
              </button>
              <button type="button" onClick={showFarming}>
                <div className="bubble farming-bubble" />
              </button>
              <button type="button" onClick={showBreathing}>
                <div className="bubble breathing-bubble" />
              </button>
              <button type="button" onClick={showExercise}>
                <div className="bubble exercise-bubble" />
              </button>
              <button type="button" onClick={showEnergy}>
                <div className="bubble energy-bubble" />
              </button>
            </div>

            <img src={cityImg} alt="" className="city-img" />
          </div>
        </div>
      </div>

      <Quote />

      <div className="moon-man">
        <img alt="" src={moonMan} />
        <button onClick={showBibliography} type="button">
          <strong data-toggle="modal" data-target="#myModal" className="sources">SOURCES +</strong>
        </button>
      </div>
      <Bibliography />

      <div id="ch6" className="ch6-section">
        <div className="container">
          <div className="article-container">
            <footer>
              <div className="external-links">
                <img alt="" src={hillarysLogo} className="hillaryLogo" />
                <p>
                  Moontopia comes courtesy of Hillarys, the interiors expert inspiring the
                  nation with beautiful blinds,
                  <a href="https://www.hillarys.co.uk/curtains/" rel="noreferrer" className="curtains"> curtains </a>
                  and shutters.
                </p>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.hillarys.co.uk/static/moontopia/" className="social-media">
                  <img src={fbLogo} alt="" />
                </a>
                <a href="https://twitter.com/home?status=In-home%20experts%20at%20Hillarys%20have%20teamed%20up%20with%20Professor%20Lewis%20Dartnell,%20University%20of%20Westminster,%20to%20imagine%20what%20life%20might%20be%20like%20150%20years%20from%20now,%20if%20we%20colonised%20the%20Moon.%20https://www.hillarys.co.uk/static/moontopia/" className="social-media">
                  <img src={twitterLogo} alt="" />
                </a>
                <a href="whatsapp://send?text=In-home%20experts%20at%20Hillarys%20have%20teamed%20up%20with%20Professor%20Lewis%20Dartnell,%20University%20of%20Westminster,%20to%20imagine%20what%20life%20might%20be%20like%20150%20years%20from%20now,%20if%20we%20colonised%20the%20Moon.%20https://www.hillarys.co.uk/static/moontopia/" className="social-media">
                  <img src={whatssapLogo} alt="" />
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>

    </>

  );
}
