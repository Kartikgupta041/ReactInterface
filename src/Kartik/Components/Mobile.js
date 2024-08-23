import React from 'react'
import { addToCart, removeFromCart } from '../Shop/shopAction'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Mobile() {
    //dispatch action method
    const dispatch = useDispatch()
   
    //function to buy product
    const buyProduct = () =>{
        dispatch(addToCart(product))
    }

    // to store product details 
    const product ={name : 'iPhone 15', price : 799, desc : 'Latest iPhone model', img : 'https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-15-pro/carousel/blue-titanium-1.png'  }
  return (
    <div>
        <h3>iPhone 15</h3>
        <img src ='https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-15-pro/carousel/blue-titanium-1.png' height={150}/><br/>
        <button class="btn btn-success" onClick={buyProduct}>Add to Cart</button><br/><br/>
    </div>
  )
}
