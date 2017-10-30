import React, { Component } from 'react'
import './App.css'
import Landing from './Landing'
class App extends Component {
  render () {
    return (
      <main className='App'>
        <header className='App-header'>
          <button className='App-logo' type='button'>
            J.C.
          </button>
        </header>
        <nav className='App-nav'>
          <ul>
            <li className='App-nav-item'>
              <a href='#welcome'>
                <span className='nav-item_number'>00</span>
                <span className='nav-item_name'>welcome</span>
              </a>
            </li>
            <li className='App-nav-item'>
              <a href='#about'>
                <span className='nav-item_number'>01</span>
                <span className='nav-item_name'>about</span>
              </a>
            </li>
            <li className='App-nav-item'>
              <a href='#portofolio'>
                <span className='nav-item_number'>02</span>
                <span className='nav-item_name'>portofolio</span>
              </a>
            </li>
            <li className='App-nav-item'>
              <a href='#contact'>
                <span className='nav-item_number'>03</span>
                <span className='nav-item_name'>contact</span>
              </a>
            </li>
          </ul>
        </nav>
        <Landing />
      </main>
    )
  }
}

export default App
