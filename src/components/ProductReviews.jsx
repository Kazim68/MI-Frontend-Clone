import React from 'react'
import ProductReviewCard from './ProductReviewCard.jsx'
import '../styles/ProductReviews.css'

const ProductReviews = ({productReviews}) => {
  return (
      <div className='productReviews'>
          {
              productReviews.map((item, index) => (
                  <ProductReviewCard price={item.price} name={item.name} image={item.image} review={item.review} index={item.index} key={item.image} />
              ))
          }
    </div>
  )
}

export default ProductReviews