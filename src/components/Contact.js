import React from 'react';

const Contact = () => (
  <div className='page__content'>
    <h2 className='page__header'>get in touch</h2>
    <form id='contact__form'>
      <input type='text' placeholder='name' />
      <input type='text' placeholder='email' />
      <textarea rows='4' placeholder='message'></textarea>
    </form>
  </div>
);

export default Contact;
