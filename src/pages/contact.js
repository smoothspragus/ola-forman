import React from "react"
import { Link, useStaticQuery, graphql} from "gatsby"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Contact from "../components/Contact"


const ContactPage = () => {
    return( 
        <Layout>
            <Contact />
        </Layout>
    )}

export default ContactPage