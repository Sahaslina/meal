import React from 'react'
import { NavLink } from 'react-router-dom'
import "../global.css"
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <div className='WebApp'>
        <div className='header'>
            {/* for Logo */}
            <div className='logo'>MEAL
            </div>
            

            <div className='navbar'>
                <NavLink to ="/home" style={{marginRight:"20px",  textDecoration:"none", color:"white", fontSize:"20px"}}>Home</NavLink>
                <NavLink to ="/categories" style={{marginRight:"20px", textDecoration:"none", color:"white", fontSize:"20px"}}>Categories</NavLink>
                <NavLink to ="/blogs" style={{marginRight:"20px", textDecoration:"none", color:"white", fontSize:"20px"}}>Blogs</NavLink>
                <NavLink to ="/contacts" style={{marginRight:"20px", textDecoration:"none", color:"white", fontSize:"20px"}}>Contact</NavLink>
                <div className='search-bar'>
                <SearchBar></SearchBar>
            </div>
                
            </div>

        </div>
        <br></br>
        {/* <Home></Home> */}



    </div>
  )
}

export default Header