import styled from 'styled-components'
import { Link } from 'gatsby'

export const Container = styled.div`
    background: rgb(30,60,84);
    background: linear-gradient(90deg, rgba(30,60,84,0.9783263647255778) 0%, rgba(25,82,125,1) 34%, rgba(36,82,116,1) 100%);
    height: 250px;
    display: flex;
    justify-content: center;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const Wrap = styled.div`
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
`
export const FLeft = styled.div`
    margin: 50px;
    width: 50%;`

export const Htext = styled.h1`
    color: whitesmoke;
    text-align: center;
    font-size: 48px !important;
}
`
export const PText = styled.div`
    color: whitesmoke;
    font-size: 24px;
    line-height: 1.3;
    text-align: center;
    margin-bottom: 0px;
    `
export const IconStyle = styled(Link)`
    text-decoration: none;
    color: whitesmoke;
    background-image: none;
    `

export const FRight = styled.div`
    margin: 50px;
    width: 50%;
    display: flex;
    justify-content: space-between;
    color: whitesmoke;
    `