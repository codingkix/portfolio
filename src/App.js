import React, { Component } from 'react'

import './App.css'

import Header from './Header'
import Landing from './Landing'
import About from './About'
import Portofolio from './Portofolio'
import Contact from './Contact'
import AppNav from './AppNav'

class App extends Component {
  render () {
    return (
      <main className='App'>
        <Header />
        <AppNav />
        <Landing />
        <About />
        <Portofolio />
        <Contact />
      </main>
    )
  }
}

export default App
