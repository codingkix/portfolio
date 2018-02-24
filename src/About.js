import React, { PureComponent } from 'react'
import cx from 'classnames'
import _ from 'lodash'
import SectionHeader from './SectionHeader'
import './About.css'

const PHOTO_NUM = 4
let intervalId
class About extends PureComponent {
  state = {
    showMore: false,
    currentPhotoIndex: -1
  }

  handleAboutMoreClick = e => {
    const show = this.state.showMore

    this.setState({ showMore: !show }, () => {
      if (this.state.showMore) {
        intervalId = setInterval(() => {
          let index = this.state.currentPhotoIndex
          this.setState({ currentPhotoIndex: ++index % PHOTO_NUM })
        }, 2000)
      } else {
        this.setState({ currentPhotoIndex: -1 })
        clearInterval(intervalId)
      }
    })
  }

  render() {
    return (
      <article id="about" className="About">
        <SectionHeader title="about me" label="01." />
        <div className="About-inner">
          <section className="About-section parallax-1">
            <div className="About-section-parallax" />
            <p>
              I bring creative into user experience thoughts and build rich
              interactive apps that give brands life and add depth to their
              stories.
            </p>
          </section>
          <blockquote className="About-section About-section__quote">
            <p>
              "Imagination is the beginning of creation. You imagine what you
              desire, you will what you imagine, and at last, you create what
              you will."
            </p>
            <p>-- George Bernard Shaw </p>
          </blockquote>
          <section className="About-section parallax-2">
            <div className="About-section-parallax" />
            <p>
              I'm passionate for all things visual and technical. It is my
              mission to revolutionize the way brands are experienced by making
              online interactions meaningful and memorable.
            </p>
            <p>
              I use cutting edge technology combined with pleasing and
              purposeful visuals to tell stories and invoke a feeling of
              connectedness.
            </p>
          </section>
          <div
            className="About-more-indicator"
            onClick={this.handleAboutMoreClick}>
            <i className="fas fa-info fa-2x" />
          </div>
          <section
            className={cx('About-more-container', {
              expanded: this.state.showMore
            })}>
            <div className="About-more-text">
              <p>
                Besides implementing applications with beautiful code, I also
                love cooking delicious dishes.
              </p>
              <p>
                Same as my pursue the pixel perfect UI design, I have put much
                hearts into the elegant dish presentations.
              </p>
              <p>
                In order to enjoy food without any guilty, I love working out a
                lot. Having conquered several Marathon runs boost my strength
                not only on body but also to mind.
              </p>
              <p>
                To me, cooking and running are also like meditation process
                after coding work. If you are fond of any of this, feel free
                contact me to share your experience.
              </p>
            </div>
            <div className="About-more-photos-wrapper">
              <ul className="About-more-photos">
                {_.times(PHOTO_NUM, i => {
                  return (
                    <li
                      key={i}
                      className={cx({
                        show: i === this.state.currentPhotoIndex,
                        hide: i !== this.state.currentPhotoIndex
                      })}>
                      <div className={`mask mask${i}`} />
                    </li>
                  )
                })}
              </ul>
            </div>
          </section>
        </div>
      </article>
    )
  }
}

export default About
