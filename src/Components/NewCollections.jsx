import React from 'react'
import Items from './Items'
import new_collections from "../assets/new_collections"

export default function NewCollections() {
  return (
    <section className='flex flex-col justify-center items-center gap-3'>
      <h1 className='text-4xl font-medium'>NEW COLLECTIONS</h1>
      <hr className='w-40 border-2 rounded-full' />
      <div className='flex items-center px-20 py-10 justify-center gap-5 flex-wrap'>
        {new_collections.map((e,i) =>
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
