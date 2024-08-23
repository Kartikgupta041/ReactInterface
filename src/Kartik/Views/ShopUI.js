import React from 'react'
import Laptop from '../Components/Laptop'
import Mobile from '../Components/Mobile'

export default function ShopUI() {
  return (
    <div className = 'container p-1 m-3'>
        <div className="row">
            <div className='col-6'><Mobile/></div>
            <div className='col-6'> <Laptop/></div>
        </div>
    </div>
  )
}
