
import React from 'react'
import Image from 'next/image'
import { getLabEquip } from '../../contentful'

export default async function Page() {
  let res  = await getLabEquip()

  return (
    <div className='productCardsContainer'>
      {
        JSON.parse(res).total !== 0 ? (
          JSON.parse(res).items.map((item, index) => {
          return (
            <div key={index} className='productCard'>
              <div>
                  <Image src={`https:${item.fields.image.fields.file.url}`} width={200} height={200} alt='products'/>  
              </div>
              <h2>
                  {item.fields.name}
              </h2>
              <p>
                {item.fields.discription}
              </p>
            </div>
          )
        })
        ) : (
          <div className='productsError'>
            <h3> Products not available ...</h3>
          </div>
        )
        
      }
    </div>
  )
}
