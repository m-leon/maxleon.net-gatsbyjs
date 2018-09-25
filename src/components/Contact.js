import React from 'react';

const Contact = () => (
  <section>
    <h2>Get in Touch</h2>
    <form id="contact__form" action="https://formspree.io/max@maxleon.net" method="POST">
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
