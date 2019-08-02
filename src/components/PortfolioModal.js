import React from 'react';
import ReactModal from 'react-modal';
import { Icon } from 'react-icons-kit';
import { github, link } from 'react-icons-kit/entypo/';

ReactModal.setAppElement('#root');

ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.75)';

export default (props) => (
  <ReactModal
    isOpen={props.isOpen}
    contentLabel={props.title}
    onRequestClose={props.onRequestClose}
    closeTimeoutMS={200}
    className="portfolio__modal"
  >
    <h3 className="portfolio__modal__title">{props.title}</h3>
    <img
      src={props.image}
      className="portfolio__modal__image"
      alt={props.title}
    />
    {props.content && <p>{props.content}</p>}
    <div className="portfolio__modal__links">
      {props.github && (
        <a href={props.github}>
          <Icon size={32} icon={github} />
        </a>
      )}
      {props.link && (
        <a href={props.link}>
          <Icon size={32} icon={link} />
        </a>
      )}
    </div>
  </ReactModal>
);
