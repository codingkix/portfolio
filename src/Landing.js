import React from "react"
import "./Landing.css"

const onCheckItClick = () => {
	document.getElementById("about").scrollIntoView({ behavior: "smooth" })
}

const Landing = () => (
	<article id="welcome" className="Landing">
		<section className="Landing-title-section">
			<h2 className="Landing-subtitle ">
				<p className="Landing-subtitle_line1">Hi, I'm J.C.</p>
			</h2>
			<h2 className="Landing-subtitle">
				<p className="Landing-subtitle_line2">A creative developer aiming to</p>
			</h2>
			<h1 className="Landing-title">
				Delivery <span className="accent">W</span>OW
			</h1>
		</section>
		<section className="Landing-check-section" onClick={onCheckItClick}>
			<label className="Landing-check-label">check it</label>
			<div className="scroll-down-wrapper">
				<span className="scroll-down-line" />
				<span className="scroll-down-marker" />
			</div>
		</section>
	</article>
)

export default Landing
