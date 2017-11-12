import React, { Component } from 'react'

import './Header.css'

class Header extends Component {
  state = {
    lastScroll: window.pageYOffset,
    showButton: false
  }

  componentDidMount () {
    window.addEventListener('scroll', e => {
      let y = window.pageYOffset
      if (y < window.innerHeight / 2) {
        // at begin half of landing, hide logo
        this.setState({ showButton: false, lastScroll: y })
      } else if (y < this.state.lastScroll) {
        // scroll up, show logo
        this.setState({ showButton: true, lastScroll: y })
      } else {
        // scroll down, hide logo
        this.setState({ showButton: false, lastScroll: y })
      }
    })
  }

  onLogoClick = e => {
    e.preventDefault()
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }

  render () {
    const classes = 'Header ' + (this.state.showButton ? 'show-logo' : '')
    return (
      <header className={classes}>
        <button
          className='Header-logo'
          type='button'
          onClick={this.onLogoClick}
        >
          J.C.
        </button>
      </header>
    )
  }
}

export default Header
