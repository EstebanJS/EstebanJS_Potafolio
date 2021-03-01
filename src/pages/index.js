import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CoverPage from "../components/CoverPage"
import FrontendSection from "../components/FrontendSection/FrontendSection"

const IndexPage = () => {

    return (
        <Layout>
            <SEO title="Home" />
            <CoverPage/>
            <FrontendSection/>    
        </Layout>
    )
}

export default IndexPage
