import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const thirdPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3</p>
    <div className = "link-wrapper">
    <Link to="/">Go back to the home page </Link> <br></br>
    <Link to="/page-2">Go back to the page 2</Link>
    </div>
  </Layout>
)

export default thirdPage
