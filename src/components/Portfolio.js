import React from 'react';
import PortfolioItem from './PortfolioItem';

class Portfolio extends React.Component {
  constructor () {
    super();

    this.state = {
      hushModalOpen: false,
      componentModalOpen: false,
      yoovoModalOpen: false,
      smartModalOpen: false,
      craigslistModalOpen: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal(modal) {
    let newState = {};
    newState[modal] = true;
    this.setState(newState);
  }

  handleCloseModal(modal) {
    let newState = {};
    newState[modal] = false;
    this.setState(newState);
  }

  render () {
    return (
      <section className="portfolio">
        <h2 className="portfolio__title">My Work</h2>
        <div className="portfolio__matrix">
          <PortfolioItem
            bgClass="portfolio__card--hush"
            bgImage={require('../resources/hush@2x.png')}
            title="Hush"
            github="https://github.com/m-leon/hush"
            link="https://hush.maxleon.net"
            modalContent="I developed Hush as a secure alternative to Pastebin"
            modalHandleOpen={() => { this.handleOpenModal('hushModalOpen') }}
            modalHandleClose={() => { this.handleCloseModal('hushModalOpen') }}
            modalIsOpen={this.state.hushModalOpen}
          />
          <PortfolioItem
            bgClass="portfolio__card--component-bucket"
            bgImage={require('../resources/component-bucket@2x.png')}
            title="Components Bucket"
            github="https://github.com/m-leon/component-bucket"
            link="https://component-bucket.netlify.com"
            modalContent="A showcase of small components"
            modalHandleOpen={() => { this.handleOpenModal('componentModalOpen') }}
            modalHandleClose={() => { this.handleCloseModal('componentModalOpen') }}
            modalIsOpen={this.state.componentModalOpen}
          />
          <PortfolioItem
            bgClass="portfolio__card--yoovo"
            bgImage={require('../resources/yoovo@2x.png')}
            title="Yoovo"
            link="https://yoovo.co"
            modalContent="Yoovo is a web design startup that I helped found as a Senior Developer"
            modalHandleOpen={() => { this.handleOpenModal('yoovoModalOpen') }}
            modalHandleClose={() => { this.handleCloseModal('yoovoModalOpen') }}
            modalIsOpen={this.state.yoovoModalOpen}
          />
          <PortfolioItem
            bgClass="portfolio__card--smart-start"
            bgImage={require('../resources/smart-start@2x.png')}
            title="Smart Start Preschool"
            modalContent="Smart Start Preschool is a local preschool and child care company who's website I'm working on. Email me for more info."
            modalHandleOpen={() => { this.handleOpenModal('smartModalOpen') }}
            modalHandleClose={() => { this.handleCloseModal('smartModalOpen') }}
            modalIsOpen={this.state.smartModalOpen}
          />
          <PortfolioItem
            bgClass="portfolio__card--craigslist"
            bgImage={require('../resources/craigslist@2x.png')}
            title="Craigslist Redesign"
            github="https://github.com/m-leon/craigslist-redesign"
            link="https://craigslist-redesign.netlify.com/"
            modalContent="A conceptual redesign to bring Craigslist to the modern day design"
            modalHandleOpen={() => { this.handleOpenModal('craigslistModalOpen') }}
            modalHandleClose={() => { this.handleCloseModal('craigslistModalOpen') }}
            modalIsOpen={this.state.craigslistModalOpen}
          />
        </div>
      </section>
    );
  }
}

export default Portfolio;
