import React from 'react';

const Portfolio = () => (
  <section className="portfolio">
    <h2 className="portfolio__title">My Work</h2>
    <div className="portfolio__matrix">
      <div className="portfolio__card portfolio__card--hush">
        <div className="portfolio__overlay"><span>Hush</span></div>
      </div>
      <div className="portfolio__card portfolio__card--yoovo">
        <div className="portfolio__overlay"><span>Yoovo</span></div>
      </div>
      <div className="portfolio__card portfolio__card--smart-start">
        <div className="portfolio__overlay"><span>Smart Start Preschool</span></div>
      </div>
      <div className="portfolio__card portfolio__card--craigslist">
        <div className="portfolio__overlay"><span>Craigslist Conceptual Redesign</span></div>
      </div>
    </div>
  </section>
);

export default Portfolio;
