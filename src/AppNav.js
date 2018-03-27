import React from "react"

import "./AppNav.css"

const onNavLinkClick = (e, name) => {
	e.preventDefault()
	const { top, left } = document.getElementById(name).getBoundingClientRect()
	console.log({ top, left })
	window.scrollBy({ top, left, behavior: "smooth" })
}

const renderNavItem = (name, index) => {
	return (
		<li className="App-nav-item">
			<a href={`#${name}`} onClick={(e) => onNavLinkClick(e, name)}>
				<span className="nav-item_number">{index}</span>
				<span className="nav-item_name">{name}</span>
			</a>
		</li>
	)
}

const AppNav = () => {
	return (
		<nav className="App-nav">
			<ul>
				{renderNavItem("welcome", "00")}
				{renderNavItem("about", "01")}
				{renderNavItem("portfolio", "02")}
				{renderNavItem("contact", "03")}
			</ul>
		</nav>
	)
}

export default AppNav
