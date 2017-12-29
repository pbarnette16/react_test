import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const Enzyme = require('enzyme')
const EnzymeAdapter = require('enzyme-adapter-react-16')
import 'jest-enzyme'

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() })

it('renders without crashing', () => {
  // const div = document.createElement('div')
  shallow(<App />)
  // ReactDOM.render(<App />, div)
})
