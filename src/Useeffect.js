import React, { useEffect, useState } from 'react'

export default function Useeffect() {
    
    const[count, setCount] = useState(0)
    const[fname, setName] = useState('')
    //execute code when component is initialzied
    // to add dependancy to executing code. use 2nd parameter of useEffect() hook
    // [] indicates none value 
    useEffect(()=>{
        console.log('Making API Call')
    },[count])
  return (
    <div>
        Useeffect
        <h1>Count: {count}</h1>
        <h2>{fname}</h2>
        <input type = 'text' placeholder='Enter name' name = 'fname' onChange={(e)=>setName(e.target.value)}></input>
        <button onClick={()=>setCount(p=>p+1)}>Increment-Change State</button>
    </div>
  )
}
