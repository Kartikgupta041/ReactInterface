// add all links 
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Menu() {
  const stateRedux = useSelector((state) => state.shop)
  return (
    <nav className = "navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
        <div className ="container-fluid bg-primary bg-gradient">
            <Link to='/home' className ="navbar-brand"><img src='/images/switerland.png' width={100}/></Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link to='/about' className="nav-link active">About Us</Link></li>
                <li className="nav-item"><Link to='/contact' className ="nav-link active">Contact Us</Link></li>
                <li className="nav-item"><Link to='/user' className="nav-link active">Login</Link></li>
                <li className="nav-item"><Link to='/shop' className="nav-link active"><i className="bi-cart"></i></Link></li>
                <li className="nav-item"><Link to='/cart' className="nav-link active">{stateRedux.cart}</Link></li>
              </ul>
            </div>
        </div>
    </nav>
  )
}
