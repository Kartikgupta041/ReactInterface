import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart, removeFromCart } from '../Shop/shopAction'

export default function Laptop() {

    const dispatch = useDispatch()
    

    //function to buy product
    const buyProduct1 = () =>{
        dispatch(addToCart(product1))
    }

    const product1 ={name : 'Macbook Pro', price : 1499, desc : 'Latest Macbook Pro Model', img : 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111901_mbp16-gray.png' }

  return (
    <div>
        <h3>Macbook Pro</h3>
        <img src = 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111901_mbp16-gray.png' height={134}/><br/>
        <button class="btn btn-success" onClick={buyProduct1}>Add to cart</button><br/><br/>
    </div>
  )
}
