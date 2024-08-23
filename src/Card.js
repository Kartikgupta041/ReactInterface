import React from 'react'

export default function Card(props) {
    let {title, img, text} = props
    //without parameter
    //event handler
    const displayMovie = () => {alert('Inside Movie Card')}

    //with parameter
    const displayTitle = (t) => {
        alert("Inside Movie Card " + t)
    }
  return (
   <div>
    <h3>{title}</h3>
    <img src = {img} width = {100} height = {100} />
    <p>{text}</p>

    {/* Button for movie card with event handler, no parameter */}
    <button onClick = {displayMovie}>Watch Movie</button>
    {/* Button for movie card with event handler, with parameter */}
    <button onClick = {()=>displayTitle(title)}>title Movie</button>

    <hr/>

    {/*
    props.movie.map(m=>(
        <h3>{title}</h3>
        <img src = {img} width = {100} height = {100} />
        <p>{text}</p>
    ))    
    */}
   </div>
  )
}
