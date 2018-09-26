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
    switch (modal) {
      case 'hush':
        this.setState({ hushModalOpen: true });
        break;
      case 'yoovo':
        this.setState({ yoovoModalOpen: true });
        break;
      case 'smart':
        this.setState({ smartModalOpen: true });
        break;
      case 'craigslist':
        this.setState({ craigslistModalOpen: true });
        break;
      default:
    }
  }

  handleCloseModal (modal) {
    switch (modal) {
      case 'hush':
        this.setState({ hushModalOpen: false });
        break;
      case 'yoovo':
        this.setState({ yoovoModalOpen: false });
        break;
      case 'smart':
        this.setState({ smartModalOpen: false });
        break;
      case 'craigslist':
        this.setState({ craigslistModalOpen: false });
        break;
      default:
    }
  }

  render () {
    return (
      <section className="portfolio">
        <h2 className="portfolio__title">My Work</h2>
        <div className="portfolio__matrix">
          <div className="portfolio__card portfolio__card--hush" onClick={() => { this.handleOpenModal('hush') }}>
            <div className="portfolio__overlay"><span>Hush</span></div>
          </div>
          <div className="portfolio__card portfolio__card--yoovo" onClick={() => { this.handleOpenModal('yoovo') }}>
            <div className="portfolio__overlay"><span>Yoovo</span></div>
          </div>
          <div className="portfolio__card portfolio__card--smart-start" onClick={() => { this.handleOpenModal('smart') }}>
            <div className="portfolio__overlay"><span>Smart Start Preschool</span></div>
          </div>
          <div className="portfolio__card portfolio__card--craigslist" onClick={() => { this.handleOpenModal('craigslist') }}>
            <div className="portfolio__overlay"><span>Craigslist Conceptual Redesign</span></div>
          </div>
        </div>
        <PortfolioModal
          isOpen={this.state.hushModalOpen}
          title="Hush"
          onRequestClose={() => { this.handleCloseModal('hush') }}
        />
        <PortfolioModal
          isOpen={this.state.yoovoModalOpen}
          title="Yoovo"
          onRequestClose={() => { this.handleCloseModal('yoovo') }}
        />
        <PortfolioModal
          isOpen={this.state.smartModalOpen}
          title="Smart"
          onRequestClose={() => { this.handleCloseModal('smart') }}
        />
        <PortfolioModal
          isOpen={this.state.craigslistModalOpen}
          title="Craigslist Redesign"
          onRequestClose={() => { this.handleCloseModal('craigslist') }}
        />
      </section>
    );
  }
}

export default Portfolio;
