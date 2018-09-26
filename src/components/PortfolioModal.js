import React from 'react';
import ReactModal from 'react-modal';

const PortfolioModal = (props) => (
  <ReactModal
     isOpen={props.isOpen}
     contentLabel={props.title}
     onRequestClose={props.onRequestClose}
     closeTimeoutMS={200}
     className="portfolio__modal"
  >
    <p>{props.title}</p>
  </ReactModal>
);

export default PortfolioModal;
