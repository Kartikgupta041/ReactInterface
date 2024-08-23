import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


export default function ProtectedRoute(props) {
    // check user identity


    // check data state
    const result = useLocation()
    const navigate= useNavigate()


    const loadFn=()=>
    {if(result.state===null || result.state===undefined)
            {   alert('Invalid Link')
                navigate('/')
            }}


    useEffect(()=>
    {loadFn()},
    [navigate,result])


  return (
    <div>
        {result.state!==null && result.state!==undefined?props.comp:null}
    </div>
  )}

