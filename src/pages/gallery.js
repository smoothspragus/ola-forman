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
          fluid(maxWidth: 400) {
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
    <Gallery imageArr={data.allFile.edges} />
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
