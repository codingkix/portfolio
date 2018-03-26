import React, { PureComponent } from "react"
import cx from "classnames"
import _ from "lodash"
import "./SectionHeader.css"
import "./About.css"

const PHOTO_NUM = 4
let intervalId

const MORE_TEXT = [
	"Besides implementing applications with beautiful code, I love cooking delicious dishes.",
	"Same as my pursue the pixel perfect UI design, I have put much hearts into the elegant dish presentations.",
	"In order to enjoy food without any guilty, I work out a lot. Having conquered Marathon runs strengthen not only my body but also mind.",
	"To me, cooking and running are more like meditation. If you are fond of any of this, please share your experience with me.",
]
class About extends PureComponent {
	state = {
		showMore: false,
		currentPhotoIndex: -1,
	}

	handleAboutMoreClick = (e) => {
		e.preventDefault()
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

		document.getElementById("about").scrollIntoView({ behavior: "smooth" })
	}

	render() {
		return (
			<article id="about" className={cx("About", { more: this.state.showMore })}>
				<h3 className="SectionHeader About-header" onClick={this.handleAboutMoreClick}>
					<label>01.</label>
					<span className="arrow arrow__left" />
					<span className="About-header-more">more</span>
					<span className="About-header-me">About me</span>
					<span className="arrow arrow__right" />
				</h3>
				<div className="About-inner">
					<section className="About-section parallax-1">
						<div className="About-section-parallax" />
						<p>
							I bring creative into user experience thoughts and build rich interactive apps that give
							brands life and add depth to their stories.
						</p>
					</section>
					<blockquote className="About-section About-section__quote">
						<p>
							"Imagination is the beginning of creation. You imagine what you desire, you will what you
							imagine, and at last, you create what you will."
						</p>
						<p>-- George Bernard Shaw </p>
					</blockquote>
					<section className="About-section parallax-2">
						<div className="About-section-parallax" />
						<p>
							I'm passionate for all things visual and technical. It is my mission to revolutionize the
							way brands are experienced by making online interactions meaningful and memorable.
						</p>
						<p>
							I use cutting edge technology combined with pleasing and purposeful visuals to tell stories
							and invoke a feeling of connectedness.
						</p>
					</section>
					<section className="About-more-container">
						<div className="About-more-text">
							{MORE_TEXT.map((text, index) => {
								return (
									<div className="About-more-text-wrapper" key={index}>
										<p>{text}</p>
									</div>
								)
							})}
						</div>
						<div className="About-more-photos-wrapper">
							<ul className="About-more-photos">
								{_.times(PHOTO_NUM, (i) => {
									return (
										<li
											key={i}
											className={cx({
												current: i === this.state.currentPhotoIndex,
												pre:
													i !== this.state.currentPhotoIndex &&
													i !== this.state.currentPhotoIndex - 1,
												after: i === this.state.currentPhotoIndex - 1,
											})}
										>
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
