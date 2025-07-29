import React from 'react'
import Items from './Items'
import data_product from "../assets/data"

export default function Popular() {
  return (
    <section className='flex flex-col justify-center items-center gap-3 h-[100vh]'>
      <h1 className='text-4xl font-medium'>POPULAR IN WOMEN</h1>
      <hr className='w-40 border-3 rounded-full' />
      <div className='flex items-center px-20 py-10 justify-center gap-5 '>
        {data_product.map((e,i) =>
          <Items 
            key={e.id}
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
