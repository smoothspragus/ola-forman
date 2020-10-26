import React from "react"
import { Link, useStaticQuery, graphql} from "gatsby"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Img from "gatsby-image"

import Video from "../components/CV"
export const query = graphql`
query IndexQuery {
  icon: file(relativePath: {eq: "RBY1.png"}) {
    childImageSharp{
      fluid(maxWidth: 1200){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

const IndexPage = ({data}) => {
  return(
  <Layout>
    <SEO title="Home" />
    <Hero />  
    
  </Layout>
)}


export default IndexPage
