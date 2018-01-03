import React, { Component } from 'react'
import './Results.css'

import {getData} from '../../services/service'

import PropertyCard from '../../tags/PropertyCard/PropertyCard'

export default class Results extends Component {
  constructor (props) {
    super(props)
    this.state = {
      results: [],
      saved: [],
    }
    this.updateProperity = this.updateProperity.bind(this)
  }

  componentDidMount () {
    getData()
    .then(data => {
      console.log('data from API', data)
      this.setState({
        results: data.results,
        saved: data.saved
      })

    })
  }

  updateProperity = (id, location) => {
    //console.log('update Item %o location %o', id, location)

    if(location === 'Results') {
        let item = this.state.results.find(item =>{
            return item.id === id
        })

        console.log('item %o', item)
        this.setState({
            saved: this.state.saved.concat(item)
        })
    }
    else if(location === 'Saved') {
        let itemLocation = this.state.saved.findIndex(item => {
            return item.id === id
        })

        if(itemLocation > -1) {
            let tempArr = this.state.saved.concat([])
            tempArr.splice(itemLocation, 1)

            this.setState({
                saved: tempArr
            })

            //console.log('tempArr %o', tempArr)            
        }


    }

  }

  getProperities = () => this.state.results

  getSavedProperities = () => this.state.saved

  render () {
    return (
      <div className='row'>
        <div className='col-sm-6'>
          <h2>Found ({this.getProperities().length})</h2>

          {
             this.getProperities().length === 0 ? (<div>
             <h3>You have no found properities.</h3>
             <p>Change your search paramters to find new properities.</p>
             </div>):
             this.getProperities().map(item => {
                return (<PropertyCard
                  logo={item.agency.logo}
                  brandingColor={item.agency.brandingColors.primary}
                  picture={item.mainImage}
                  price={item.price}
                  cardLocation={'Results'}
                  id={item.id}
                  updatePropertyState={(id, cardLocation) => {
                    this.updateProperity(id, cardLocation)
                    } 
                }
                 />)
             })

           
          }
        </div>
        <div className='col-sm-6'>
           <h2>Saved ({this.getSavedProperities().length})</h2>
          {
             this.getSavedProperities().length === 0 ? (<div><h3>You have no saved properities.</h3>
             <p>Clicking 'Add' will include this property in this list so you can review it later.</p></div>) :
             this.getSavedProperities().map(item => {
                return (<PropertyCard
                  logo={item.agency.logo}
                  brandingColor={item.agency.brandingColors.primary}
                  picture={item.mainImage}
                  price={item.price}
                  cardLocation={'Saved'}
                  id={item.id}
                  updatePropertyState= {(id, cardLocation) => {
                    this.updateProperity(id, cardLocation)
                    } 
                }
                 />)
             })

           
          }
          
        </div>
      </div>
    )
  }

}

