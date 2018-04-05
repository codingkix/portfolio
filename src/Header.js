import React, { Component } from 'react'
import cx from 'classnames'
import rafSchedule from 'raf-schd'

import './Header.css'

class Header extends Component {
	lastScroll = 0

	state = {
		showLogo: false,
	}

	scheduleUpdate = rafSchedule((y) => {
		if (y < window.innerHeight / 2) {
			// at begin half of landing, hide logo
			this.setState({ showLogo: false })
		} else if (y < this.lastScroll) {
			// scroll up, show logo
			this.setState({ showLogo: true })
		} else {
			// scroll down, hide logo
			this.setState({ showLogo: false })
		}

		this.lastScroll = y
	})

	componentDidMount() {
		window.addEventListener('scroll', (e) => {
			this.scheduleUpdate(window.scrollY)
		})
	}

	componentWillUnmount() {
		this.scheduleUpdate.cancel()
	}

	onLogoClick = (e) => {
		e.preventDefault()
		window.scroll({ top: 0, left: 0, behavior: 'smooth' })
	}

	render() {
		return (
			<header className={cx('Header', { 'show-logo': this.state.showLogo })}>
				<button className="Header-logo" type="button" onClick={this.onLogoClick}>
					J.C.
				</button>
			</header>
		)
	}
}

export default Header
