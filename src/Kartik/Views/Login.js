import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Login() {
    const pass = 'password'
    const user = 'Kartik'
    

    const [msg, setMsg] = useState('Guest View')
    const [loginDetails, setLoginDetails] = useState({username:'', password:''})
    const[status,setStatus]=useState(false)
    const[loadData, setLoadData] = useState(false)

    //for updating data
    //e.target refers to the element which triggered the event 
    //e.target.value is the value property of the element which changed (onChange event)
    const handleChange = (e) => {
        setLoginDetails({...loginDetails,
            [e.target.name]: e.target.value
        })
    }

    const loginBtn = (e) =>{
        if(status){
            setStatus(false)
            setMsg('Guest View')
            setLoginDetails({username: '', password: ''})
            setLoadData(false)
        }
        else{
            if(loginDetails.username == user && loginDetails.password == pass){
                setStatus(!status)
                setMsg(<strong style={{color: 'gold', fontWeight : 900}}>Admin View</strong>)  
                
            } 
            else if(loginDetails.username == user && loginDetails.password != pass){
                alert('Incorrect Password')
                setLoginDetails({...loginDetails, password : ''})
            }
            else if(loginDetails.username != user && loginDetails.password == pass){
                alert('Incorrect Username')
                setLoginDetails({...loginDetails, username : ''})
            }
            else{
                alert('Incorrect Details')
                setLoginDetails({username: '', password : ''})
            }
        }
    }

    const loadDataHandler = () => {
        setLoadData(true)
    }

  return (
    <div>
        <h1>{msg}</h1>
        <input type = 'text' name = 'username' placeholder='Enter Username' value={loginDetails.username} onChange={handleChange}/><br/><br/>
        <input type = 'password' name = 'password' placeholder='Enter Password' value={loginDetails.password}  onChange={handleChange}/><br/><br/>

        <button onClick={loginBtn}>{status?'Logout':'Login'}</button>
        {
            status &&  (
                <div>
                    <Link to='loadData' onClick={loadDataHandler}>Load Data</Link>
                    
                </div>
            )
        }
        {loadData && <Outlet/>}
    </div>
    
  )
}
