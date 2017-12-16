import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import {getData} from './services/service'

class App extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    console.log('componentWillMount')
    getData()
    .then(data => {
      console.log('data %o', data)
    })
  }

  render () {
    return (
      <div className='App container'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <div class='row'>
          <div class='col-sm-6'>
           col 1
         </div>
          <div class='col-sm-6'>
           col 2
         </div>
        </div>
      </div>
    )
  }
}

export default App
