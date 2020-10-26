import React from 'react'
import { Link } from "gatsby"
import "./Navbar.css"


const Navbar = () => {
    return (
        <nav className = "Navbar"> 
            <div className ="Navbar--links">
                <div className = "Name">
                    <Link to ="/">Ola Forman</Link>
                </div>
                <div className = "Pages">
                    <Link to ="/"><div>Short Films and Voice Reels</div></Link>
                    <Link to ="/"><div>Poetry and Paintings</div></Link>
                    <Link to ="../gallery"><div>Gallery</div></Link>

                    <Link className="Navbar-last" to ="/"><div>Contact</div></Link>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar