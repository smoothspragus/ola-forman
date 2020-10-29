import React from 'react'

import "./Navbar.css"
import { NavC, NavItems, NavLinks, NavName, NavAnime} from './Navbar.styles'


const Navbar = () => {
    return (
        <NavC> 
            <NavItems>
                <div>
                    <NavName to ="/">Ola Forman</NavName>
                </div>
                <div>
                    <NavLinks to ="/"><NavAnime>Short Films and Voice Reels</NavAnime></NavLinks>
                    <NavLinks to ="/"><NavAnime>Poetry and Paintings</NavAnime></NavLinks>
                    <NavLinks to ="../gallery"><NavAnime>Gallery</NavAnime></NavLinks>

                    <NavLinks style={{marginRight: '0'}} to ="/"><NavAnime>Contact</NavAnime></NavLinks>
                </div>
            </NavItems>
            
        </NavC>
    )
}

export default Navbar