import React from 'react'
import './Portfolio.css'
import discover from './images/discover.png'
import grooveshark from './images/grooveshark.png'
import kohls from './images/kohls.png'
import sa from './images/sa.png'
import redbull from './images/redbull.png'
import target from './images/target.png'
import uo from './images/uo.png'

import SectionHeader from './SectionHeader'
import PortfolioItem from './PortfolioItem'

const projects = [
  {
    screenshot: redbull,
    title: 'Red Bull Mobile Collect',
    types: ['web', 'mobile']
  },
  {
    screenshot: discover,
    title: 'Discover Rewards',
    types: ['web', 'mobile']
  },
  {
    screenshot: kohls,
    title: "Kohl's Yes2You",
    types: ['web', 'mobile']
  },
  {
    screenshot: sa,
    title: 'The League',
    types: ['web', 'mobile']
  },
  {
    screenshot: target,
    title: 'Target Pharmacy',
    types: ['web']
  },
  {
    screenshot: uo,
    title: 'Universal Studio',
    types: ['web']
  },
  {
    screenshot: grooveshark,
    title: 'GrooveShark Music',
    types: ['web']
  }
]

const Portfolio = () => {
  return (
    <article id='portfolio' className='Portfolio'>
      <div className='Portfolio-banner'>
        <div className='banner-mask' />
        <span className='divider' />
        <div className='banner-mask__white' />
        <SectionHeader
          className='Portfolio-header'
          title='portfolio'
          label='02.'
        />
      </div>
      <ul className='Portfolio-list'>
        {projects.map((item, index) => {
          return <PortfolioItem item={item} key={index} />
        })}
      </ul>
    </article>
  )
}

export default Portfolio
