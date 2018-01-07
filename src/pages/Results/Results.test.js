import React from 'react'
import {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Results from './Results'
import sinon from 'sinon'

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

// console.log('Data %o', Data)

test('Results: Component renders', () => {
  const results = shallow(<Results />, {
    disableLifecycleMethods: true
  })

  results
  .instance()
  // .componentDidMount()
})

test('Results: Renders with a set state', () => {
  const results = shallow(<Results />, {
    disableLifecycleMethods: true
  })

  results
  .instance()
  .setState({
    results: Data.results,
    saved: Data.saved
  })

  expect(results.instance().getProperities().length).toEqual(3)
  expect(results.instance().getSavedProperities().length).toEqual(1)
})

test('Results: Adding a new saved property', () => {
  const results = shallow(<Results />, {
    disableLifecycleMethods: true
  })

  results
  .instance()
  .setState({
    results: Data.results,
    saved: Data.saved
  })

  expect(results.instance().getProperities().length).toEqual(3)
  expect(results.instance().getSavedProperities().length).toEqual(1)

  // move a property to the saved column
  results.instance().updateProperity('1', 'Results')
  expect(results.instance().getProperities().length).toEqual(3)
  expect(results.instance().getSavedProperities().length).toEqual(2)
})

test('Results: Adding a new saved property', () => {
  const results = shallow(<Results />, {
    disableLifecycleMethods: true
  })

  results
  .instance()
  .setState({
    results: Data.results,
    saved: Data.saved
  })

  expect(results.instance().getProperities().length).toEqual(3)
  expect(results.instance().getSavedProperities().length).toEqual(1)

  // move a property to the saved column
  results.instance().updateProperity('1', 'Results')
  expect(results.instance().getProperities().length).toEqual(3)
  expect(results.instance().getSavedProperities().length).toEqual(2)
})

test('Results: Removing a saved property', () => {
  const results = shallow(<Results />, {
    disableLifecycleMethods: true
  })

  results
  .instance()
  .setState({
    results: Data.results,
    saved: Data.saved
  })

  expect(results.instance().getProperities().length).toEqual(3)
  expect(results.instance().getSavedProperities().length).toEqual(1)

  // move a property to the saved column
  results.instance().updateProperity('4', 'Saved')
  expect(results.instance().getProperities().length).toEqual(3)
  expect(results.instance().getSavedProperities().length).toEqual(0)
})

test('Results: Trying to remove a saved id that doesnt exist', () => {
  const results = shallow(<Results />, {
    disableLifecycleMethods: true
  })

  results
  .instance()
  .setState({
    results: Data.results,
    saved: Data.saved
  })

  expect(results.instance().getProperities().length).toEqual(3)
  expect(results.instance().getSavedProperities().length).toEqual(1)

  // move a property to the saved column
  results.instance().updateProperity('5', 'Saved')
  expect(results.instance().getProperities().length).toEqual(3)
  expect(results.instance().getSavedProperities().length).toEqual(1)
})
