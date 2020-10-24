import React from 'react'
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql} from "gatsby"
import "./Hero.css"
import styled from 'styled-components'


const Container = styled.div `
      display:flex;
      width: 100%;
      margin-top: 120px;
      margin-bottom: 120px;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
const HeroC = styled.div`
      max-width: 1200px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 0px;
      `;

const PicC = styled.div`
      width: 500px;
      border-radius: 50%;
      margin-bottom: 0px;
      `;



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
              <div className="Hero-text">
                <h1>Hi im ola:)</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
          </HeroC>
        </Container>
        
    )
}

export default Hero
