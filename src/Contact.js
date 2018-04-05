import React from 'react'

import SectionHeader from './SectionHeader'
import './Contact.css'

const HowBlock = ({ block, ...props }) => {
	const { title, line } = block
	return (
		<div className="Contact-how-block">
			<span />
			<div className="Contact-how-block_inner">
				<h3>{title}</h3>
				<p>{line}</p>
				<a className="Contact-button" href="mailto:junchaozhang2007@gmail.com?subject=Let%27s%20Build">
					<span className="Contact-button-text">contact me</span>
				</a>
			</div>
		</div>
	)
}

const howBlocks = [
	{
		title: 'solo builder',
		line: `Have a design or just an idea but need a hand to bring it alive?
          That's my specialty - HTML5, CSS3, React w/ Native, Cloud
          Integration.`,
	},
	{
		title: 'team work',
		line: `Already have a team but need leader or extra hand? My rich
    experience of dev leadership may help. Let's work together to
    create something WOW.`,
	},
]

const Contact = () => {
	return (
		<article id="contact" className="Contact">
			<span className="divider" />
			<div className="Contact-banner-mask" />
			<SectionHeader title="hire me" label="03." className="Contact-header" />
			<p className="Contact-line">I am currently available for selective opportunities. Here's how I can help:</p>
			<div className="Contact-how">
				{howBlocks.map((block, index) => {
					return <HowBlock block={block} key={index} />
				})}
			</div>
		</article>
	)
}

export default Contact
