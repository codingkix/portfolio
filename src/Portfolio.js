import './Portfolio.css'
import React, { Component } from 'react'
import rafSchedule from 'raf-schd'
import cx from 'classnames'

import discover from './images/discover.png'
import grooveshark from './images/grooveshark.png'
import kohls from './images/kohls.png'
import sa from './images/sa.png'
import redbull from './images/redbull.png'
import target from './images/target.png'
import uo from './images/uo.png'
import dunkin from './images/dunkin.png'
import tasty from './images/tasty.png'
import spicy from './images/spicy.png'

import SectionHeader from './SectionHeader'
import PortfolioItem from './PortfolioItem'

const projects = [
	{
		screenshot: redbull,
		title: 'RedBull Mobile Collect',
		types: ['web', 'mobile'],
		hover: '#1C58A1',
		link: 'https://www.redbullmobilecollect.pl/',
	},
	{
		screenshot: discover,
		title: 'Discover Rewards',
		types: ['web', 'mobile'],
		hover: '#DD7030',
		link: 'https://www.discover.com/credit-cards/cashback-bonus/',
	},
	{
		screenshot: kohls,
		title: "Kohl's Yes2You",
		types: ['web', 'mobile'],
		hover: '#CC5199',
		link: 'https://www.kohls.com/feature/rewards.jsp',
	},
	{
		screenshot: sa,
		title: 'The League',
		types: ['web', 'mobile'],
		hover: '#F66855',
	},
	{
		screenshot: dunkin,
		title: 'DDPERKS',
		types: ['web'],
		hover: '#EFAE36',
		link: 'https://www.dunkindonuts.com/en/dd-perks',
	},
	{
		screenshot: target,
		title: 'Target Pharmacy',
		types: ['web'],
		hover: '#E83132',
		link: 'https://www.target.com/c/pharmacy/-/N-54y52',
	},
	{
		screenshot: uo,
		title: 'Universal Studio',
		types: ['web'],
		hover: '#3E92D3',
		link: 'https://www.universalorlando.com/web/en/us/index.html',
	},
	{
		screenshot: grooveshark,
		title: 'GrooveShark Music',
		types: ['web'],
		hover: '#4E504E',
		link: 'http://groovesharks.org/top/tracks',
	},
	{
		screenshot: tasty,
		title: 'Tasty',
		types: ['web', 'mobile'],
		hover: '#F07249',
	},
	{
		screenshot: spicy,
		title: 'SpicyTaste',
		types: ['web'],
		hover: '#6C504A',
		link: 'https://spicytaste.herokuapp.com/',
	},
]

class Portfolio extends Component {
	state = {
		isInView: false,
	}

	scheduleUpdate = rafSchedule(() => {
		const { top } = document.getElementById('portfolio').getBoundingClientRect()

		if (top > 0 && top < window.innerHeight) {
			this.setState((prevState) => {
				if (!prevState.isInView) {
					return { isInView: true }
				}
			})
		} else {
			this.setState((prevState) => {
				if (prevState.isInView) {
					return { isInView: false }
				}
			})
		}
	})

	componentDidMount() {
		window.addEventListener('scroll', (e) => {
			this.scheduleUpdate()
		})
	}

	render() {
		return (
			<article id="portfolio" className="Portfolio">
				<div className="Portfolio-banner">
					<span className="divider" />
					<div className={cx('banner-mask', { show: this.state.isInView })} />
					<SectionHeader className="Portfolio-header" title="portfolio" label="02." />
				</div>
				<ul className="Portfolio-list">
					{projects.map((item, index) => {
						return <PortfolioItem item={item} key={index} />
					})}
				</ul>
			</article>
		)
	}
}

export default Portfolio
