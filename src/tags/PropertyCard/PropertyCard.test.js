import React from 'react'
import {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PropertyCard from './PropertyCard'

const Enzyme = require('enzyme')
const EnzymeAdapter = require('enzyme-adapter-react-16')
import 'jest-enzyme'

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() })

const propertyParams = {
  updatePropertyState: (id, cardLocation) => {},
  price: '$726,500',
  brandingColor: '#ffe512',
  logo: 'http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif',
  id: '5',
  picture: 'http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg',
  cardLocation: 'Saved'
}

test('PropertyCard renders correctly', () => {
  const propertyCard = shallow(<PropertyCard />)
})

describe('Default params', () => {
  test('Setting default logo renders correctly', () => {
    const propertyCard = shallow(<PropertyCard />)
    expect(propertyCard.find('.logo').prop('src')).toEqual('')
  })
  test('Setting default branding renders correctly', () => {
    const propertyCard = shallow(<PropertyCard />)
    expect(propertyCard.find('.branding').prop('style').backgroundColor).toEqual('#e4002b')
  })
  test('Setting default price renders correctly', () => {
    const propertyCard = shallow(<PropertyCard />)
    expect(propertyCard.find('.price').text()).toEqual('$0.0')
  })
  test('Setting default picture renders correctly', () => {
    const propertyCard = shallow(<PropertyCard />)
    expect(propertyCard.find('.card-img-top').prop('src')).toEqual('http://placekitten.com/640/480')
  })
  test('Setting default cardLocation', () => {
    const propertyCard = shallow(<PropertyCard />)
    expect(propertyCard.prop('data-card-location')).toEqual('Result')
  })
  test('Setting default id', () => {
    const propertyCard = shallow(<PropertyCard />)
    expect(propertyCard.prop('id')).toEqual('1')
  })
})

