import React from 'react'
import SectionHeader from './SectionHeader'

import './About.css'

const About = () => {
  return (
    <article id='about' className='About'>
      <SectionHeader title='about me' label='01.' />
      <section className='About-section parallax-1'>
        <div className='About-section-parallax' />
        <p>
          I bring creative into user experience thoughts and build rich
          interactive apps that give brands life and add depth to their stories.
        </p>
      </section>
      <section className='About-section'>
        <blockquote className='About-section-quote'>
          <p>
            "Imagination is the beginning of creation. You imagine what you
            desire, you will what you imagine, and at last, you create what you
            will."
          </p>
          <p>-- George Bernard Shaw </p>
        </blockquote>
      </section>
      <section className='About-section parallax-2'>
        <div className='About-section-parallax' />
        <p>
          I'm passionate for all things visual and technical. It is my mission
          to revolutionize the way brands are experienced by making online
          interactions meaningful and memorable.
        </p>
        <p>
          I use cutting edge web technology combined with pleasing and
          purposeful visuals to tell stories and invoke a feeling of
          connectedness.
        </p>
      </section>
      <section className='About-section' />
    </article>
  )
}

export default About
