import React, { Component } from "react"

import "./App.css"
import Header from "./Header"
import Landing from "./Landing"
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import AppNav from "./AppNav"

class App extends Component {
	render() {
		return (
			<main className="App">
				<Header />
				<AppNav />
				<Landing />
				<About />
				<Portfolio />
				<Contact />
				<a className="App-email" href="mailto:junchaozhang2007@gmail.com?subject=Let%27s%20Build">
					<i className="far fa-envelope-open fa-lg" />
				</a>
			</main>
		)
	}
}

export default App
