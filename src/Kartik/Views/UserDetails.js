import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


export default function UserDetails() {
    // store response/result from useLocation hook
    const result = useLocation()

    // create state for all the data
    const[location, setLocation] = useState()
    const[pin, setPin] = useState()
    const[age, setAge] = useState()
    const[ph, setPhone] = useState()
    const[mail, setMail] = useState()

    // set all new values and make sure data is transfferred before loading
    const setFn=() =>{
        setLocation(result.state.location)
        setPin(result.state.pin)
        setAge(result.state.age)
        setPhone(result.state.ph)
        setMail(result.state.email)
    }

    //navigate from one view to another 
    let navigate = useNavigate()

    useEffect(()=> setFn(),[])
  return (
    <div>
        <button onClick={()=>navigate(-1)}>Back</button>
        <div>
            <p> Billing address: {location} <br/>{pin}</p>
            <p>Phone: {ph}</p>
            <Link to={'mailto:'+ mail}>{mail}</Link>
        </div>
    </div>
  )
}
