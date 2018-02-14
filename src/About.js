import React, { PureComponent } from 'react'
import cx from 'classnames'

import SectionHeader from './SectionHeader'

import './About.css'

class About extends PureComponent {
  state = {
    showMore: false
  }

  handleAboutMoreClick = e => {
    const show = this.state.showMore
    this.setState({ showMore: !show })
  }

  render () {
    return (
      <article id='about' className='About'>
        <SectionHeader title='about me' label='01.' />
        <div className='About-inner'>
          <section className='About-section parallax-1'>
            <div className='About-section-parallax' />
            <p>
              I bring creative into user experience thoughts and build rich
              interactive apps that give brands life and add depth to their
              stories.
            </p>
          </section>
          <blockquote className='About-section About-section__quote'>
            <p>
              "Imagination is the beginning of creation. You imagine what you
              desire, you will what you imagine, and at last, you create what you
              will."
            </p>
            <p>-- George Bernard Shaw </p>
          </blockquote>
          <section className='About-section parallax-2'>
            <div className='About-section-parallax' />
            <p>
              I'm passionate for all things visual and technical. It is my mission
              to revolutionize the way brands are experienced by making online
              interactions meaningful and memorable.
            </p>
            <p>
              I use cutting edge technology combined with pleasing and purposeful
              visuals to tell stories and invoke a feeling of connectedness.
            </p>
          </section>
          <div
            className='About-more-indicator'
            onClick={this.handleAboutMoreClick}>
            <i class='fas fa-info fa-2x' />
          </div>
          <section
            className={cx('About-more-container', {
              expanded: this.state.showMore
            })}
          />
        </div>
      </article>
    )
  }
}

export default About
