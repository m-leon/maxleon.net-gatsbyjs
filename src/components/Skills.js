import React from 'react';

import { Icon } from 'react-icons-kit'
import { fastForward, lock, mobile, mobileCombo } from 'react-icons-kit/entypo/'

const Skills = () => (
  <section className="skills">
    <div className="skills__content">
      <h2>My Expertises</h2>
      <span>Always aim for perfection.</span>
      <p>I’m always in pursuit of knowledge that will allow me to create, design, optimize, and perfect my work. In the modern web landscape, I strive to find the balance between aesthetics, functionality, and purpose.</p>
    </div>
    <div className="skills__matrix">
      <div className="skills__card">
        <Icon size={32} icon={mobileCombo} />
        <div className="skills__card__title">Responsive Design</div>
        <p className="skills__card__content">I follow a mobile first design philosophy that inherently leads to a more fluid result.</p>
      </div>
      <div className="skills__card">
        <Icon size={32} icon={lock} />
        <div className="skills__card__title">Security Oriented</div>
        <p className="skills__card__content">Keeping up on the latest trends allows me to stay a step ahead of all those with malicious intent.</p>
      </div>
      <div className="skills__card">
      <Icon size={32} icon={mobile} />
        <div className="skills__card__title">Mobile App Development</div>
        <p className="skills__card__content">My skillset allows me to create solutions that will run natively on any device.</p>
      </div>
      <div className="skills__card">
        <Icon size={32} icon={fastForward} />
        <div className="skills__card__title">Optimized Results</div>
        <p className="skills__card__content">I understand the importance of creating exeriences that become interactive with no delay to expose more users to your product.</p>
      </div>
    </div>
  </section>
);

export default Skills;
