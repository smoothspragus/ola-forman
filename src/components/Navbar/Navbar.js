import React from 'react'
import { Link } from "gatsby"
import "./Navbar.css"


const Navbar = () => {
    return (
        <nav className = "Navbar"> 
            <ul className ="Navbar--links">
                <Link to ="/"><li>Home</li></Link>
                <li>Acting</li>
                <li>Contact</li>
            </ul>
            
        </nav>
    )
}

export default Navbar