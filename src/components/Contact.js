import React from 'react';

import { Icon } from 'react-icons-kit';
import { linkedin, mail, github } from 'react-icons-kit/entypo/';

export default () => (
  <section className="contact">
    <div className="contact__map__wrapper">
      <div className="contact__map">
        <div className="contact__map__locator">
          <div className="contact__map__tooltip">
            <ul>
              <li>Sacramento, California</li>
              <li>
                <a href="mailto:max@maxleon.net">max@maxleon.net</a>
              </li>
              <li>(530) 522-8476</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="contact__form">
      <h3>Get in Touch</h3>
      <form action="https://formspree.io/max@maxleon.net" method="POST">
        <input type="text" name="name" placeholder="name" required />
        <input type="email" name="email" placeholder="email" required />
        <textarea rows="4" name="message" placeholder="message" required />
        <input type="text" name="_gotcha" style={{ display: 'none' }} />
        <input type="hidden" name="_next" value="https://maxleon.net/sent" />
        <input type="hidden" name="_format" value="plain" />
        <button>Submit</button>
      </form>
      <div className="contact__icons">
        <a href="mailto:max@maxleon.net">
          <Icon size={32} icon={mail} />
        </a>
        <a href="https://github.com/m-leon/">
          <Icon size={32} icon={github} />
        </a>
        <a href="https://www.linkedin.com/in/max-leon-22398439/">
          <Icon size={32} icon={linkedin} />
        </a>
      </div>
    </div>
  </section>
);
