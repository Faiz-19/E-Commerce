import React from 'react'
import arrow_icon from '../assets/breadcrum_arrow.png'

const BreadCrumbs = (props) => {
    const { product } = props;

    const currentCategory = product.category;

    return (
      <div className='flex items-center gap-1.5 flex-wrap text-xs sm:text-sm text-zinc-600 w-full max-w-6xl'>
        HOME
        <img src={arrow_icon} alt=">" className="h-3" />
        SHOP
        <img src={arrow_icon} alt=">" className="h-3" />
        {currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}
        <img src={arrow_icon} alt=">" className="h-3" />
        <span className="text-zinc-800 font-semibold">{product.name}</span>
      </div>
    )
}

export default BreadCrumbs