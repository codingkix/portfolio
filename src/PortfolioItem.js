import React from 'react'

const renderTypes = types => {
  return (
    <h5 className="Portfolio-project-type">
      {types.map((type, index) => {
        if (type === 'web') {
          return (
            <React.Fragment key={index}>
              <i className="fas fa-desktop" />
              <span>Web</span>
            </React.Fragment>
          )
        }

        if (type === 'mobile') {
          return (
            <React.Fragment key={index}>
              <i className="fas fa-mobile-alt" />
              <span>Mobile</span>
            </React.Fragment>
          )
        }
      })}
    </h5>
  )
}

const PortfolioItem = ({ item, ...props }) => {
  const { screenshot, title, types } = item
  return (
    <li className="Portfolio-item">
      <div className="Portfolio-project">
        <figure className="Portfolio-preview">
          <img className="Portfolio-screenshot" src={screenshot} alt={title} />
          <figcaption className="Portfolio-project-info">
            <h4 className="Portfolio-project-title">{title}</h4>
            {renderTypes(types)}
          </figcaption>
        </figure>
      </div>
    </li>
  )
}

export default PortfolioItem
