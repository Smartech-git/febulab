'use client'

import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function loading() {
    const loadingDiv = Array(10).fill({item: undefined, description: undefined, imageUrl: undefined});

  return (
    <div className='productCardsContainer'>
        {
            loadingDiv.map((item, index) => {
                return (
                    <div key={index} className='productCard'>
                        <div>
                            <Skeleton height={'100%'}/>   
                        </div>
                        <h2>
                            <Skeleton width={'70%'}/>
                        </h2>
                        <p>
                        <Skeleton width={'90%'} height={'100%'}/>
                        </p>
                    </div>
                )
            })
        }
    </div>
  )
}
