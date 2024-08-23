import React from 'react'

export default function Greet(props) {
    //destrucutre props
    //let {name,age, location, msg} = props
    //destrucutre person object (which is inside props object)
    let {fname, age, location, msg} = props.personInfo
  return (
    <div>
        <div><h1>Welcome to my website, {fname}</h1></div>
        <h3>Age: {age}</h3>
        <h3>Location: {location}</h3>
        <div>{msg}</div>
    </div>
  )
}

//props:{name : 'Peter}

//console.log(props.name) // to display value of name in console.log()