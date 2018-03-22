import React from 'react'

class PortfolioItem extends React.PureComponent {
  state = {
    hover: false
  }

  handleHover = e => {
    e.preventDefault()
    this.setState({ hover: true })
  }

  handleLeave = e => {
    e.preventDefault()
    this.setState({ hover: false })
  }

  renderTypes = types => {
    return (
      <h5 className='Portfolio-project-type'>
        {types.map((type, index) => {
          if (type === 'mobile') {
            return (
              <React.Fragment key={index}>
                <i className='fas fa-mobile-alt' />
                <span>Mobile</span>
              </React.Fragment>
            )
          }
          return (
            <React.Fragment key={index}>
              <i className='fas fa-desktop' />
              <span>Web</span>
            </React.Fragment>
          )
        })}
      </h5>
    )
  }

  render () {
    const { screenshot, title, types, hover } = this.props.item
    const backgroundColor = this.state.hover ? hover : null
    return (
      <li className='Portfolio-item'>
        <div
          className='Portfolio-project'
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleLeave}
          style={{ backgroundColor: backgroundColor }}>
          <figure className='Portfolio-preview'>
            <img
              className='Portfolio-screenshot'
              src={screenshot}
              alt={title}
            />
            <figcaption className='Portfolio-project-info'>
              <h4 className='Portfolio-project-title'>{title}</h4>
              {this.renderTypes(types)}
            </figcaption>
          </figure>
        </div>
      </li>
    )
  }
}

export default PortfolioItem
