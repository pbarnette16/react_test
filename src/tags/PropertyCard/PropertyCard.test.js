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
  cardLocation: 'Saved',
  buttonText: 'Remove'
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
    expect(propertyCard.prop('data-card-location')).toEqual('Results')
  })

  test('Getting default the button text', () => {
    const propertyCard = shallow(<PropertyCard />)
    expect(propertyCard.find('button').text()).toEqual('Add')
  })
})

describe('Test loading specific params to the Property Card', () => {
  test('Setting logo renders correctly', () => {
    const propertyCard = shallow(<PropertyCard logo={propertyParams.logo} />)
    expect(propertyCard.find('.logo').prop('src')).toEqual(propertyParams.logo)
  })

  test('Setting branding renders correctly', () => {
    const propertyCard = shallow(<PropertyCard brandingColor={propertyParams.brandingColor} />)
    expect(propertyCard.find('.branding').prop('style').backgroundColor).toEqual(propertyParams.brandingColor)
  })
  test('Setting price renders correctly', () => {
    const propertyCard = shallow(<PropertyCard price={propertyParams.price} />)
    expect(propertyCard.find('.price').text()).toEqual(propertyParams.price)
  })
  test('Setting property picture renders correctly', () => {
    const propertyCard = shallow(<PropertyCard picture={propertyParams.picture} />)
    expect(propertyCard.find('.card-img-top').prop('src')).toEqual(propertyParams.picture)
  })
  test('Setting default cardLocation', () => {
    const propertyCard = shallow(<PropertyCard cardLocation={propertyParams.cardLocation} />)
    expect(propertyCard.prop('data-card-location')).toEqual(propertyParams.cardLocation)
  })

  test('Getting the button text', () => {
    const propertyCard = shallow(<PropertyCard cardLocation={propertyParams.cardLocation} />)
    expect(propertyCard.find('button').text()).toEqual(propertyParams.buttonText)
  })
})
