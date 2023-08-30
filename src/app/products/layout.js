'use client'

import React from 'react'
import './globals.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ProductLayout({
  children,
}) {

  const path = usePathname()

  return (
    <section>
      <div className="product">
        <div>
          <h1>products</h1>    
          <div className="productsNav">
            <Link href='../products/laboratoryEquipments' >
              <div className={path === '/products/laboratoryEquipments'? 'productType_active' : 'productType'}>
                <span>Laboratory Equipments</span>
              </div>
            </Link>
            
            <Link href='../products/laboratoryApparatus'>
              <div className={path === '/products/laboratoryApparatus'? 'productType_active' : 'productType'}>
                <span>Laboratory Apparatus</span>
              </div>
            </Link>
            
            <Link href='../products/laboratoryConsumables'>
              <div className={path === '/products/laboratoryConsumables'? 'productType_active' : 'productType'}>
                <span>Laboratory Consumables</span>
              </div>
            </Link>
          
          <Link href='../products/others'>
              <div className={path === '/products/others'? 'productType_active' : 'productType'}>
                <span>Others</span>
              </div>
          </Link>
            
          </div>
        </div>
        {children}
      </div> 
    </section>
  )
}
