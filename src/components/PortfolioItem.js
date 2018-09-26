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
      image={props.bgImage}
      content={props.modalContent}
      link={props.link}
      github={props.github}
      onRequestClose={props.modalHandleClose}
    />
  </span>
);

export default PortfolioItem;
