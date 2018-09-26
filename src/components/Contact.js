import React from 'react';

const Contact = () => (
  <section className="contact">
      <div className="contact__map">
        <div className="contact__map__locator">
          <div className="contact__map__tooltip">
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
      <div className="contact__form">
        <h3>Get in Touch</h3>
        <form action="https://formspree.io/max@maxleon.net" method="POST">
          <input type="text" name="name" placeholder="name" />
          <input type="text" name="email" placeholder="email" />
          <textarea rows="4" name="message" placeholder="message"></textarea>
          <input type="text" name="_gotcha" style={{display:"none"}} />
          <input type="hidden" name="_next" value="https://maxleon.net/sent" />
          <input type="hidden" name="_format" value="plain" />
          <button>Submit</button>
        </form>
      </div>
    </section>
);

export default Contact;
