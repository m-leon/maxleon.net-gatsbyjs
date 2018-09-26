import React from 'react';
import PortfolioModal from './PortfolioModal';

class Portfolio extends React.Component {
  constructor () {
    super();

    this.state = {
      hushModalOpen: false,
      yoovoModalOpen: false,
      smartModalOpen: false,
      craigslistModalOpen: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal (modal) {
    let newState = {};
    newState[modal] = true;
    this.setState(newState);
  }

  handleCloseModal (modal) {
    let newState = {};
    newState[modal] = false;
    this.setState(newState);
  }

  render () {
    return (
      <section className="portfolio">
        <h2 className="portfolio__title">My Work</h2>
        <div className="portfolio__matrix">
          <div className="portfolio__card portfolio__card--hush" onClick={() => { this.handleOpenModal('hushModalOpen') }}>
            <div className="portfolio__overlay"><span>Hush</span></div>
          </div>
          <div className="portfolio__card portfolio__card--yoovo" onClick={() => { this.handleOpenModal('yoovoModalOpen') }}>
            <div className="portfolio__overlay"><span>Yoovo</span></div>
          </div>
          <div className="portfolio__card portfolio__card--smart-start" onClick={() => { this.handleOpenModal('smartModalOpen') }}>
            <div className="portfolio__overlay"><span>Smart Start Preschool</span></div>
          </div>
          <div className="portfolio__card portfolio__card--craigslist" onClick={() => { this.handleOpenModal('craigslistModalOpen') }}>
            <div className="portfolio__overlay"><span>Craigslist Conceptual Redesign</span></div>
          </div>
        </div>
        <PortfolioModal
          isOpen={this.state.hushModalOpen}
          title="Hush"
          onRequestClose={() => { this.handleCloseModal('hushModalOpen') }}
        />
        <PortfolioModal
          isOpen={this.state.yoovoModalOpen}
          title="Yoovo"
          onRequestClose={() => { this.handleCloseModal('yoovoModalOpen') }}
        />
        <PortfolioModal
          isOpen={this.state.smartModalOpen}
          title="Smart"
          onRequestClose={() => { this.handleCloseModal('smartModalOpen') }}
        />
        <PortfolioModal
          isOpen={this.state.craigslistModalOpen}
          title="Craigslist Redesign"
          onRequestClose={() => { this.handleCloseModal('craigslistModalOpen') }}
        />
      </section>
    );
  }
}

export default Portfolio;
