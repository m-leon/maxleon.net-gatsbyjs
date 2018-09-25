import React from 'react';

const Contact = () => (
  <section className="contact">
      <div id="map">
        <div className="map-locator">
          <div className="tooltip">
            <ul>
              <li>
                <span>California</span>
              </li>
              <li>
                <a href="mailto:max@maxleon.net">max@maxleon.net</a>
              </li>
              <li>
                (530) 522-8476
              </li>
            </ul>
          </div>
        </div>
      </div>
      <form action="https://formspree.io/max@maxleon.net" method="POST">
        <p>Get in Touch</p>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="email" placeholder="email" />
        <textarea rows="4" name="message" placeholder="message"></textarea>
        <input type="text" name="_gotcha" style={{display:"none"}} />
        <input type="hidden" name="_next" value="https://maxleon.net/sent" />
        <input type="hidden" name="_format" value="plain" />
        <button>Submit</button>
      </form>
    </section>
);

export default Contact;
