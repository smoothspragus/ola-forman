import React from 'react'
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql} from "gatsby"
import "./Footer.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab)



const Footer = () => {
    return (
        <div className="F-container">
            <div className="F-wrap">
                <div className="F-left">
                    <h1 className="F-head">
                        You can find me on:
                    </h1>
                    <p className="F-p">
                    Follow me to see more of my work and stay updated on whats coming in the future. Thank you!
                    </p>
                </div>
                <div className="F-right">
                    
                        <Link to="/"><FontAwesomeIcon icon={['fab', 'instagram']} className="Ig" size="5x" /></Link>
                        <Link to="/"><FontAwesomeIcon icon={['fab', 'twitter']} className="Tt" size="5x"/></Link>
                        <Link to="https://www.youtube.com/channel/UCprRdFa2AS7LY1VHl0Dbd9g?fbclid=IwAR20LcxLXwqBO3biBVJvmC41qIPbLDSa4FRAAFQFIcwaDsYMxLr36nQssyU"><FontAwesomeIcon icon={['fab', 'youtube']} className="Yt" size="5x"/></Link>
                        <Link to="/"><FontAwesomeIcon icon={['fab', 'facebook']} className="Fb" size="5x" /></Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer