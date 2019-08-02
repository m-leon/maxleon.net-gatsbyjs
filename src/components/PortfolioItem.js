import React from 'react';
import PortfolioModal from './PortfolioModal';

export default (props) => (
  <span>
    <div
      className={`portfolio__card ${props.bgClass}`}
      onClick={props.modalHandleOpen}
    >
      <div className="portfolio__overlay">
        <span>{props.title}</span>
      </div>
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
