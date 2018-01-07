import React from 'react'
import {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Results from './Results'

const Data = require('../../services/results.json')

const Enzyme = require('enzyme')
const EnzymeAdapter = require('enzyme-adapter-react-16')
import 'jest-enzyme'

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() })

var axios = require('axios')
var MockAdapter = require('axios-mock-adapter')

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios)

console.log('Data %o', Data)

test('Results component renders', () => {
  const results = shallow(<Results />, {
    disableLifecycleMethods: true
  })

  results
  .instance()
  .componentDidMount()
})

test('Results renders with a set state', () => {
  const results = shallow(<Results />, {
    disableLifecycleMethods: true
  })

  results
  .instance()
  .setState({
    results: Data.results,
    saved: Data.saved
  })
})
