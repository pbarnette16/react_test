import React from 'react'
import logo from './logo.svg'
import './App.css'
import Results from './pages/Results/Results'

export default () => (
  <div className='App container'>
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <h1 className='App-title'>Welcome to React</h1>
    </header>
    <Results />
  </div>
    )

