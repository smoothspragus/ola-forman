import React from 'react'
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql} from "gatsby"


import { Container, Wrap, FLeft, FRight, Htext, PText, IconStyle} from './Footer.styles'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab)



const Footer = () => {
    return (
        <Container>
            <Wrap>
                <FLeft>
                    <Htext>
                        You can find me on:
                    </Htext>
                    <PText>
                    Follow me to see more of my work and stay updated on whats coming in the future. Thank you!
                    </PText>
                </FLeft>
                <FRight>
                    
                        <IconStyle to="/"><FontAwesomeIcon icon={['fab', 'instagram']} className="Ig" size="5x" /></IconStyle>
                        <IconStyle to="/"><FontAwesomeIcon icon={['fab', 'twitter']} className="Tt" size="5x"/></IconStyle>
                        <IconStyle to="https://www.youtube.com/channel/UCprRdFa2AS7LY1VHl0Dbd9g?fbclid=IwAR20LcxLXwqBO3biBVJvmC41qIPbLDSa4FRAAFQFIcwaDsYMxLr36nQssyU"><FontAwesomeIcon icon={['fab', 'youtube']} className="Yt" size="5x"/></IconStyle>
                        <IconStyle to="/"><FontAwesomeIcon icon={['fab', 'facebook']} className="Fb" size="5x" /></IconStyle>
                    
                </FRight>
            </Wrap>
        </Container>
    )
}

export default Footer