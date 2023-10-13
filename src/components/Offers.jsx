import React from 'react'
import Offer from './Offer.jsx'
import '../styles/Offers.css'

const Offers = ({offers}) => {
  return (
    <div className="offerSection">
      {offers.map((offer, idx) => (
        <Offer src={offer.image} link={offer.link} index={idx} key={offer.image}  />
      ))}
    </div>
  )
}

export default Offers