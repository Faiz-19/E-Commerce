import React from 'react'
import arrow_icon from '../assets/breadcrum_arrow.png'

const BreadCrumbs = (props) => {
    const currentCategory = props.product.category
  return (
      <p className='flex items-center gap-1.5 w-[80vw]'>HOME <span><img src={arrow_icon} alt="" /></span> SHOP <span><img src={arrow_icon} alt="" /></span> {currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)} <span><img src={arrow_icon} alt="" /></span> {props.product.name}
      </p>
  )
}

export default BreadCrumbs
