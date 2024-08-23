import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../Shop/shopAction'

export default function Cart() {
    const cartItems = useSelector((state)=>state.shop.cartItems)
    const dispatch = useDispatch()

    const handleRemove=(i)=>{
        if(window.confirm('Remove Item from cart')){
            dispatch(removeFromCart(i))}
    }

  return (
    <div>
        <h1 style={{color : 'yellow'}}>Cart:</h1>
        {cartItems.length>0?
        (cartItems.map((item, index)=>(
            <div key={index}>
                <h3 style={{fontWeight: 900}}>{item.name}</h3>
                <p><strong>Price : {item.price}</strong></p>
                <p><strong>Description : {item.desc}</strong></p>
                <img src={item.img} height = {100}></img><br/>
                <button class="btn btn-danger" onClick={()=>handleRemove(index)}>Remove Product</button>
                <hr/>
                </div>
        ))):
        (<p>No item in Cart</p>)}
    </div>
  )
}
