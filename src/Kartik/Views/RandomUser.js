import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function RandomUser() {

    //state for data update 
    const [dataArray, setData] = useState()

    const data = async ()=>{
        let allUsers=[]
        try{
            for(let i=0; i<10; i++){
        const response= await axios.get('https://randomuser.me/api/')
        allUsers=[...allUsers,...response.data.results]
        }
        setData(allUsers)
    }
    catch(error){console.log(error)}
    }

    //on load make API call (fetch data)
    useEffect(()=>{data();console.log(dataArray)},[])

  return (
    <div>
        <table border={2} align='center'>
            <thead>
                <tr>
                    <th>Profile Picture</th>
                    <th>Name</th>
                    <th>Email id</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {
                    // DataArray if it exists run map else show loading
                    dataArray?dataArray.map((m)=>(
                        <tr key={m.cell}>
                            <td><img src={m.picture.large} width={100} height={100}></img></td>
                            <td>{m.name.title} {m.name.first} {m.name.last}<br/>
                            <Link to ='/userDetails' state={{location:m.location.street.number+', '+m.location.street.name+', '+m.location.city+', '+m.location.country, pin:m.location.postcode, age:m.dob.age, ph:m.phone, email:m.email}}>Read More</Link>
                            </td> {/*to='path state ='{property:value}'*/}
                            <td>{m.email}</td>
                            <td>{m.gender}</td>
                        </tr>
                        
                    )):
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden"><tr><td colSpan={4}>Loading...</td></tr></span>
                    </div>
                    //<tr><td colSpan={4}>Loading...</td></tr>
                }
            </tbody>
        </table>
    </div>
  )
}
