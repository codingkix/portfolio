import React from 'react'
import './Landing.css'

const Landing = () => (
  <article className='Landing'>
    <section className='Landing-title-section'>
      <h2 className='Landing-subtitle'>
        Hi, I'm J.C.
      </h2>
      <h2 className='Landing-subtitle'>
        A creative developer aiming to
      </h2>
      <h1 className='Landing-title'>Delivery Wow</h1>
    </section>
    <section className='Landing-check-section'>
      <label className='Landing-check-label'>check it</label>
      <div className='scroll-down-wrapper'>
        <span className='scroll-down-line' />
        <span className='scroll-down-marker' />
      </div>
    </section>
  </article>
)

export default Landing
