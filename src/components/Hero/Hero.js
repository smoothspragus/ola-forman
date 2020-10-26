import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import {Container, HeroC, PicC, HeroT} from './Hero.styles'



const Hero = () => {
 const heroData = useStaticQuery(graphql`
 query HeroQuery {
    headshot: file(relativePath: {eq: "3corporate.jpg"}) {
      childImageSharp{
        fluid(maxWidth: 600){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }`)

    return (
        <Container>
          <HeroC>
            <PicC>
              
              <Img style={{borderRadius: '50%', border: '15px solid rgba(25,82,125,1)'}} fluid={heroData.headshot.childImageSharp.fluid} />
              
                
            </PicC>
              <HeroT>
                <h1 style={{fontSize: '48px'}}>Hi im ola:)</h1>
                <p style={{fontSize: '24px', lineHeight: '1.3', color: 'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </HeroT>
          </HeroC>
        </Container>
        
    )
}

export default Hero
