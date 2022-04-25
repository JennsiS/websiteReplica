import React from 'react';
import closeImg from '../img/close.svg';
import '../css/styles.scss';
import harvester from '../img/harvester.jpg';
import dish from '../img/dish.jpg';
import lift from '../img/lift.jpg';
import wall from '../img/wall.jpg';
import lab from '../img/lab.jpg';
import park from '../img/park.jpg';
import court from '../img/court.jpg';
import reactor from '../img/reactor.jpg';

export default function sideNav() {
  function hideHarvesting() {
    document.getElementById('harvestingModal').style.display = 'none';
  }
  function hideHazard() {
    document.getElementById('hazardsModal').style.display = 'none';
  }
  function hideLift() {
    document.getElementById('liftModal').style.display = 'none';
  }
  function hideTemperature() {
    document.getElementById('temperatureModal').style.display = 'none';
  }
  function hideFarming() {
    document.getElementById('farmingModal').style.display = 'none';
  }
  function hideBreathing() {
    document.getElementById('breathingModal').style.display = 'none';
  }
  function hideExercise() {
    document.getElementById('exerciseModal').style.display = 'none';
  }
  function hideEnergy() {
    document.getElementById('energyModal').style.display = 'none';
  }
  return (
    <>
      <div id="harvestingModal" className="harvesting-modal modal">
        <div className="inner-modal">
          <div className="close">
            <button type="button" onClick={hideHarvesting}>
              <img src={closeImg} alt="" />
            </button>
          </div>
          <div className="modal-left" style={{ backgroundImage: `url(${harvester})` }} />
          <div className="text-right">
            <h3>Harvesting Minerals</h3>
            <div className="text-content">
              <p>
                While the Moon’s surface may look pretty bleak,
                there are actually a lot of natural resources. Thanks to solar wind
                and a lack of atmosphere and magnetic field,
                He-3 has soaked into the Moon’s exterior.
                This means the Moon’s surface has an abundance of helium-3 (He-3),
                which scientists peg to be the nuclear fusion fuel of the future.
              </p>
              <p>
                This would be especially useful for us on the Moon,
                as we would have to use a Nuclear Fusion Reactor for our power supply.
              </p>
              <p>
                Unlike the Earth, where we have running water, on the Moon we would have to
                harvest our water from frozen ice deposits on the lunar South Pole.
                Water is completely essential for human life; we need it for drinking,
                washing and sanitation, and water can be used to create an atmosphere.
                Water was introduced to the Moon’s surface by
                comets impacting the lunar surface, and is now frozen on the surface,
                waiting to be harvested.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="hazardsModal" className="hazards-modal modal">
        <div className="inner-modal">
          <div className="close">
            <button type="button" onClick={hideHazard}>
              <img src={closeImg} alt="" />
            </button>
          </div>
          <div className="modal-left" style={{ backgroundImage: `url(${dish})` }} />
          <div className="text-right">
            <h3>MICROMETEORITES & COSMIC RADIATION</h3>
            <div className="text-content">
              <p>
                Perhaps the most terrifying reason for living underground is the risk
                of micrometeorites and cosmic radiation on the surface.
              </p>
              <p>
                On Earth the atmosphere shields us from space debris. However, the Moon’s
                airless surface is unprotected and falling meteorites could punch a hole in
                the side of a habitat and cause it to depressurise. Living underground would
                provide a barrier against meteorites, and also shielding from the dangerous
                cosmic radiation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="liftModal" className="lift-modal modal">
        <div className="inner-modal">
          <div className="close">
            <button type="button" onClick={hideLift}>
              <img src={closeImg} alt="" />
            </button>
          </div>
          <div className="modal-left" style={{ backgroundImage: `url(${lift})` }} />
          <div className="text-right">
            <h3>LIFT</h3>
            <div className="text-content">
              <p>
                To get to and from the surface on the Moon, a lift would be installed.
                The lift would move between the floor of the lava tube to a skylight
                which would have to be sealed and air-locked.
              </p>
              <p>
                The lift would mainly be used by those who are travelling to the surface
                in order to harvest the rare materials on the Moon.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="temperatureModal" className="temperature-modal modal">
        <div className="inner-modal">
          <div className="close">
            <button type="button" onClick={hideTemperature}>
              <img src={closeImg} alt="" />
            </button>
          </div>
          <div className="modal-left" style={{ backgroundImage: `url(${wall})` }} />
          <div className="text-right">
            <h3>TEMPERATURE</h3>
            <div className="text-content">
              <p>
                The Moon experiences very different conditions to planet Earth.
                Temperatures vary from 100°C in direct sunlight, to -170°C during the lunar night,
                which lasts a fortnight. This presents an enormous challenge to colonists.
              </p>
              <p>
                Living inside a lava tube, surrounded by insulating rock, will allow the
                colonists to easily control the interior temperature.
              </p>
              <p>
                Without seasons or naturally occurring weather, it could be t-shirt weather
                all year round.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="farmingModal" className="farming-modal modal">
        <div className="inner-modal">
          <div className="close">
            <button type="button" onClick={hideFarming}>
              <img src={closeImg} alt="" />
            </button>
          </div>
          <div className="modal-left" style={{ backgroundImage: `url(${lab})` }} />
          <div className="text-right">
            <h3>FARMING</h3>
            <div className="text-content">
              <p>
                Traditional farming would be a thing of the past on the Moon, we’d need
                all the space and oxygen available to keep ourselves alive.
              </p>
              <p>
                Without the space for farm animals, artificial meat would need to be grown
                in labs using tissue cultures in special vats. Hydroponic farms would need
                to be established to grow fruit and vegetables.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="breathingModal" className="breathing-modal modal">
        <div className="inner-modal">
          <div className="close">
            <button type="button" onClick={hideBreathing}>
              <img src={closeImg} alt="" />
            </button>
          </div>
          <div className="modal-left" style={{ backgroundImage: `url(${park})` }} />
          <div className="text-right">
            <h3>FARMING</h3>
            <div className="text-content">
              <p>
                There’s no atmosphere on the Moon so we would need to manufacture the oxygen we
                breathe. Luckily, we will be able to use some of the water we have harvested on
                the Moon to achieve this. By using the process of electrolysis, we can run
                electricity through the water to split water molecules and produce oxygen.
              </p>
              <p>
                Without the space for farm animals, artificial meat would need to be grown
                in labs using tissue cultures in special vats. Hydroponic farms would need
                to be established to grow fruit and vegetables.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="exerciseModal" className="exercise-modal modal">
        <div className="inner-modal">
          <div className="close">
            <button type="button" onClick={hideExercise}>
              <img src={closeImg} alt="" />
            </button>
          </div>
          <div className="modal-left" style={{ backgroundImage: `url(${court})` }} />
          <div className="text-right">
            <h3>EXERCISING</h3>
            <div className="text-content">
              <p>
                Parks and gyms would be completely unrecognisable.
                Lunar gravity is a sixth of what we are used to on Earth,
                so jumping and lifting would be much easier. Basketball hoops would need to be
                18m off the ground provide the same challenge as a classic ‘dunk’.
                For the weight lifters in the group, lifting over 250kg wouldn’t even cause them to
                break a sweat.
              </p>
              <p>
                Walking and running would be completely different to what we are used to.
                The reduced gravity on the Moon would mean that the way we walk would no
                longer be possible and everyone would need to develop a new method of taking steps.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="energyModal" className="energy-modal modal">
        <div className="inner-modal">
          <div className="close">
            <button type="button" onClick={hideEnergy}>
              <img src={closeImg} alt="" />
            </button>
          </div>
          <div className="modal-left" style={{ backgroundImage: `url(${reactor})` }} />
          <div className="text-right">
            <h3>ENERGY</h3>
            <div className="text-content">
              <p>
                The only viable energy source we could use on the Moon would be a
                Nuclear Fusion Reactor.
                Solar energy would not be an option because of the two-week long night.
              </p>
              <p>
                On Earth we use Nuclear Fission reactors,
                which work by splitting one unstable atom into two.
                Fusion is the opposite process and is what powers the Sun.
                It is the process of combining two atoms together which
                releases a large amount of energy.
                The Helium-3 which we could harvest on the Moon would make great fuel for a
                Nuclear Fusion reactor.
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
