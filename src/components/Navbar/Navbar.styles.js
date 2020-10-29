import styled from 'styled-components'
import { Link } from 'gatsby'

export const NavC = styled.div`
    width: 100%;
    margin: 0px;
    background: rgb(30,60,84);
    background: linear-gradient(90deg, rgba(30,60,84,0.9783263647255778) 0%, rgba(25,82,125,1) 34%, rgba(36,82,116,1) 100%);
    justify-content: center;
    display:flex;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
`
export const NavItems = styled.div`
    display: flex;
    margin: 1.8rem; 
    max-width: 1200px;
    width: 100%;
    justify-content: space-between;
`
export const NavLinks = styled(Link)`
background-image: none;
    margin-left: 2.2rem;
    font-size: 0.9rem;
    text-decoration:none;
    display: inline-flex;
    color: whitesmoke;
    line-height: 33px;
    text-shadow: none;`

export const NavName = styled(Link)`
background-image: none;
     font-size: 42px;
     text-decoration:none;
     display: flex;
     margin-right: 4rem;
     color: whitesmoke;
     text-shadow: none;
     font-weight: 700;
`
export const NavAnime = styled.div`
color: whitesmoke;
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
    &:after {
        border-bottom: solid 1px whitesmoke;
        transform: scaleX(0);
        display: block;
        content: "";
        transition: transform 351ms ease-in-out;
    }
    &:hover:after {
        transform: scaleX(1);
        
    }
    &:hover:after {
        transform-origin: 0% 50%;
    }`
