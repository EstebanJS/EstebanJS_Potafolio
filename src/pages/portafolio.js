import React from 'react'
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PfContent from '../components/Portafolio/PfContent';



function portafolio() {
    return (
        <Layout>
            <SEO title="Portafolio" />
            <PfContent/>
        </Layout>
    )
}

export default portafolio
