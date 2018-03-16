import React from 'react'
import './Portfolio.css'
import demo from './images/demo.jpg'

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
              <img className="Portfolio-screenshot" src={demo} />
            </figure>
            <figcaption className="Portfolio-project-info">
              <h4 className="Portfolio-project-title">project</h4>
              <h5 className="Portfolio-project-type">
                <i className="fas fa-desktop" />
                <i class="fas fa-mobile-alt" />
              </h5>
            </figcaption>
          </span>
        </li>
        <li className="Portfolio-item">
          <span className="Portfolio-project">
            <figure className="Portfolio-preview">
              <img className="Portfolio-screenshot" src={demo} />
            </figure>
            <figcaption className="Portfolio-project-info">
              <h4 className="Portfolio-project-title">project</h4>
            </figcaption>
          </span>
        </li>
        <li className="Portfolio-item">
          <span className="Portfolio-project">
            <figure className="Portfolio-preview">
              <img className="Portfolio-screenshot" src={demo} />
            </figure>
            <figcaption className="Portfolio-project-info">
              <h4 className="Portfolio-project-title">project</h4>
            </figcaption>
          </span>
        </li>
        <li className="Portfolio-item">
          <span className="Portfolio-project">
            <figure className="Portfolio-preview">
              <img className="Portfolio-screenshot" src={demo} />
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
