import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
        <h1>Contact Us for more information</h1>
        {/* / will not be given here. /is given for a new path */}
        <Link to='Movies'>Movie List</Link>

        {/* Outlet is given to view child routes  */}
        <Outlet></Outlet>

    </div>
  )
}
