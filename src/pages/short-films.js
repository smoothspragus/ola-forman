import React from 'react'
import Layout from "../components/Layout"

import SEO from "../components/seo"

import Footer from "../components/Footer"
import Video from "../components/CV"

export const shortFilms = () => {
    return (
       <Layout>
           <SEO title="Short Films" />
           <Video />
           <Footer />
       </Layout>
    )
}

export default shortFilms