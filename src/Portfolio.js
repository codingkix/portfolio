import React from 'react'
import './Portfolio.css'
import project1 from './images/coding.jpg'

import SectionHeader from './SectionHeader'

const Portfolio = () => {
  return (
    <article id="portfolio" className="Portfolio">
      <div className="Portfolio-banner">
        <div className="banner-mask" />
        <span className="divider" />
        <div className="banner-mask__white" />
        <SectionHeader
          className="Portfolio-header"
          title="portfolio"
          label="02."
        />
      </div>
      <ul className="Portfolio-list">
        <li className="Portfolio-item">
          <span className="Portfolio-project">
            <figure className="Portfolio-preview">
              <img className="Portfolio-screenshot" />
            </figure>
            <figcaption className="Portfolio-project-info">
              <h4 className="Portfolio-project-title">project</h4>
            </figcaption>
          </span>
        </li>
        <li className="Portfolio-item">
          <span className="Portfolio-project">
            <figure className="Portfolio-preview">
              <img />
            </figure>
            <figcaption className="Portfolio-project-info">
              <h4 className="Portfolio-project-title">project</h4>
            </figcaption>
          </span>
        </li>
        <li className="Portfolio-item">
          <span className="Portfolio-project">
            <figure className="Portfolio-preview">
              <img />
            </figure>
            <figcaption className="Portfolio-project-info">
              <h4 className="Portfolio-project-title">project</h4>
            </figcaption>
          </span>
        </li>
      </ul>
    </article>
  )
}

export default Portfolio
