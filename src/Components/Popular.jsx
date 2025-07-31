import React from 'react'
import Items from './Items'
import data_product from "../assets/data"

export default function Popular() {
  return (
    <section className='flex flex-col justify-center items-center gap-3 my-10 px-4'>
      <h1 className='text-3xl md:text-4xl font-medium text-center'>POPULAR IN WOMEN</h1>
      <hr className='w-40 border-2 rounded-full' />
      <div className='flex flex-wrap items-start justify-center gap-5 w-full max-w-7xl my-10'>
        {data_product.map((e,i) =>
          <Items 
            key={e.id}
            id={e.id}
            discription={e.name}
            image={e.image}
            newPrice={e.new_price}
            oldPrice={e.old_price}
          />
        )}
      </div>
    </section>
  )
}