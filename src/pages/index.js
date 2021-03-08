import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CoverPage from "../components/CoverPage"
import Section from "../components/Section/Section"


const IndexPage = () => {

    return (
        <Layout>
            <SEO title="Home" />
            <CoverPage  />
            <Section title="Skils" idSection="Skils" ItemStyle={1}/>
            <Section title="Personal Projects" idSection="Projects" ItemStyle={2}/>
            <Section title="Contact" idSection="Contact" ItemStyle={3}/>
        </Layout>
    )
}

export default IndexPage
