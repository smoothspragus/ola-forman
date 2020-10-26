import React from "react"
import { Link } from "gatsby"
import Gallery from "../components/Gallery"
import Layout from "../components/Layout"
import SEO from "../components/seo"
export const query = graphql`
query galleryQuery {
  allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
    edges {
      node {
        name
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`

const SecondPage = ({data}) => (
  <Layout>
    <Gallery style={{backgroundColor: 'black'}} imageArr={data.allFile.edges} />
    <SEO title="Page two" />
   
  </Layout>
)

export default SecondPage
