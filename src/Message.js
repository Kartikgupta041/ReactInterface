import React, { useState } from 'react'


export default function Message() {
    // use hook to store and modify the state
    // Destructure the value recieved from useState to store it and modify
    const [msg,setMsg]=useState('Please Subscribe')


    // boolean value:
    const[status,setStatus]=useState(false)


    //number value
    const[count,setCount]=useState(0)
    const newMsg=()=>
    {
        // call the setMsg function with new value
        setMsg('Thank you for subscription')
        // for toggle
        setCount((count)=>count+1)
    }


    const loginFn =()=>
    {
        setStatus(!status)
    }
  return (
    <div>
        <h2>{msg}</h2>
        {/* ternary operator is required to show result based on true/false */}
        <p>{(count!=0)?<h2>Admin</h2>:'Guest User'}</p>
        <p>Number of Subscriptions: {count}</p>
        <button onClick={newMsg}>Subscribe</button>
        <p>
        <button onClick={loginFn}>{status?'Logged In':'Logged Out'}</button>
        </p>
    </div>  )}
