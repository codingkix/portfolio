import React from 'react'
import './Portfolio.css'

import SectionHeader from './SectionHeader'

const Portfolio = () => {
  return (
    <article id="portfolio" className="Portfolio">
      <SectionHeader title="portfolio" label="02." />
      <ul className="Portfolio-list">
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
