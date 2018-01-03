import React from 'react'
import './PropertyCard.css'

export default({
      logo = '',
      brandingColor = '#e4002b',
      picture = 'http://placekitten.com/640/480',
      price = '$0.0',
      cardLocation = 'Results',
      id = '1',
      updatePropertyState = (id, cardLocation) => {}
    }) => (<div className={['card', 'PropertyCard', cardLocation].join(' ')} id={id}
      data-card-location={cardLocation}>
      <div className='branding' style={{backgroundColor: brandingColor}}>
        <img src={logo} alt='' className='logo' />
      </div>
      <img className='card-img-top' src={picture} alt='' />
      <div className='card-body'>
        <p className='price'>{price}</p>
        <button onClick={() => {
          updatePropertyState(id, cardLocation)
        }}
          >{(cardLocation === 'Results') ? 'Add' : 'Remove'}</button>
      </div>
    </div>)