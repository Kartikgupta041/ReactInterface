import React, { useEffect, useRef, useState } from 'react'
import moviedata from '../../movie'

export default function Movielist() {
    
    //on initiazlization of component, load movie data with updated property 
    // Array of objects 
    const[movieList,setData] = useState(moviedata)
    let updatedList = ''

    const[newMovie, setMovie] = useState({})

    //refrence to DOM elements to access current properties of the element
    //initialize reference 
    const divMain = useRef()
    const box = useRef()
    const check = useRef()

    const toggleWatch = (selectedIndex) =>{
        setData(movieList.map((m,index)=>
        // match passed index with each data
        selectedIndex===index?
        // if matvhed, change selected dats watch property only
        {...m, watch:!m.watch}:
        // elese return data as it is
        m))
        divMain.current.className = 'container'

        if(check.current.children[selectedIndex].lastChild.firstChild.checked==true){
        check.current.children[selectedIndex].firstChild.style.color='green'
        check.current.children[selectedIndex].firstChild.style.fontWeight=900
        }
        else{
            check.current.children[selectedIndex].firstChild.style.color='white'   
            check.current.children[selectedIndex].firstChild.style.fontWeight=400
        }
        //check.current.children[selectedIndex].children[selectedIndex].style.color='green'
    }

    const addMovie = () => {
        setData([...movieList, {...newMovie, watch: false}])
        setMovie({title: ''})
    }

    const handleChange = (e) => {
        setMovie({...newMovie, [e.target.name] : e.target.value})
        console.log(newMovie)
    }

    //on initiazlization of component, load movie data with updated property 
    useEffect(()=>{updatedList=movieList.map((m)=>
        // if matvhed, change selected dats watch property only
        ({...m, watch:false}))
        setData(updatedList)
    box.current.focus()},[])
        

  return (
    <div ref={divMain}>
        <input ref={box} id = 'title' type = 'text' placeholder = 'Enter new movie name' name='title' onChange={handleChange}></input>
        <button onClick={addMovie}>Add</button>
        <table>
            <thead>
                <tr>
                    <th>Movie Name</th>
                    <th>Watch</th>
                </tr>
            </thead>
            <tbody ref ={check}>
                {/* Dynamically create rows based on data*/}
                {
                    movieList.map((m,i)=>(
                        <tr key={i}>
                            <td>{m.title}</td>
                            <td>
                                <input type = 'checkbox' checked={m.watch} onChange={() => toggleWatch(i)}/>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
