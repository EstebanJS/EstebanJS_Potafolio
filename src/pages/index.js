import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import '../styles/banner.css'

import Html5 from '../images/HTML5.svg'
import Css3 from '../images/css3.svg'
import JavaScript from '../images/javascript.svg'
import Node from '../images/nodejs-icon.svg'
import LogoReact from '../images/react.svg'
import TypeScript from '../images/typescript.svg'
import Vue from '../images/vue-js-1.svg'
import Webpack from '../images/webpack-icon.svg'

const IndexPage = () => {
    const data = useStaticQuery(graphql`
    query {
        placeholderImage: file(relativePath: { eq: "Foto.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <Layout>
            <SEO title="Home" />
            <section className="banner">
                <div className="banner-content">
                    <div className="box-text">
                        <h1><span role="img" aria-label="Laptop">💻</span>Yeisson Esteban Jiménez Bustos</h1>
                        <h3>Hola, soy un estudiante de ingeniería de sistemas en la Universidad de Cundinamarca apasionado
                    por las tecnologías web JavaScript.</h3>
                        <h2>Mis Habilidades:</h2>
                        <div id="Logos">
                            <figure className="item">
                                <img src={Html5} alt="Html 5" />
                                <h3>HTML5</h3>
                            </figure>
                            <figure className="item">
                                <img src={Css3} alt="Css 3" />
                                <h3>CSS3</h3>
                            </figure>
                            <figure className="item">
                                <img src={JavaScript} alt="javascript" />
                                <h3>JavaScript</h3>
                            </figure>
                            <figure className="item">
                                <img src={Node} alt="Node" />
                                <h3>Node</h3>
                            </figure>
                            <figure className="item">
                                <img src={LogoReact} alt="React" />
                                <h3>React</h3>
                            </figure>
                            <figure className="item">
                                <img src={TypeScript} alt="typescript" />
                                <h3>TypeScript</h3>
                            </figure>
                            <figure className="item">
                                <img src={Vue} alt="Vue" />
                                <h3>Vue</h3>
                            </figure>
                            <figure className="item">
                                <img src={Webpack} alt="Webpack" />
                                <h3>Webpack</h3>
                            </figure>
                        </div>

                    </div>
                    <div className="box-image">
                        <Img className="photo" fluid={data.placeholderImage.childImageSharp.fluid} alt="Yeisson Jimenez" />
                        <div className="box-contact">
                            <a href="https://github.com/EstebanJS" target="_blank" rel="noopener noreferrer">
                                <img height="32" width="32"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" alt="GitHub"/>
                            </a>
                            <a href="https://twitter.com/EstebanJS_" target="_blank" rel="noopener noreferrer">
                                <img height="32" width="32"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" alt="twitter"/>
                            </a>
                            <a href="mailto:yeisson310@hotmail.com" target="_blank" rel="noopener noreferrer">
                                <img height="32" width="32"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/microsoftoutlook.svg" alt="outlook"/>
                            </a>

                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default IndexPage
