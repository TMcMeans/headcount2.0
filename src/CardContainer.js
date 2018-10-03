import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card.js'
import './CardContainer.css'

const CardContainer = ({districts}) => {  
  const districtCards = districts.map( district => <Card district={district} />)
  return (
    <div className="card-container">
      { districtCards }
    </div>  
  )
}

CardContainer.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object)
}

export default CardContainer; 