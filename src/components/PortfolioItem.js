import React from 'react';
import PortfolioModal from './PortfolioModal';

const PortfolioItem = (props) => (
  <span>
    <div
      style={{ backgroundImage: 'url(' + props.bgImage + ')' }}
      className="portfolio__card"
      onClick={props.modalHandleOpen}
    >
      <div className="portfolio__overlay"><span>{props.title}</span></div>
    </div>
    <PortfolioModal
      isOpen={props.modalIsOpen}
      title={props.title}
      onRequestClose={props.modalHandleClose}
    />
  </span>
);

export default PortfolioItem;
