import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const PortfolioModal = (props) => (
  <ReactModal
     isOpen={props.isOpen}
     contentLabel={props.title}
     onRequestClose={props.onRequestClose}
     closeTimeoutMS={200}
     className="portfolio__modal"
  >
    <h3 className="portfolio__modal__title">{props.title}</h3>
  </ReactModal>
);

export default PortfolioModal;
