import React, {  useEffect } from 'react'
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

import Html5 from '../../images/HTML5.svg'
import Css3 from '../../images/css3.svg'
import Javascript from '../../images/javascript-4.svg'
import Colombia from '../../images/colombia.svg'

import './style.css'
import gsap from 'gsap';

const CoverPage = () => {
    function animations() {
        var Section_1Begin = gsap.timeline()
        Section_1Begin.from(".title h1", { duration: 1, x: -600, ease: "back", stagger: 0.25 })
        Section_1Begin.from(".text p", { duration: 1, x: -700 })
        Section_1Begin.from(".image", { duration: 1, x: "150%" }, 1)
        Section_1Begin.from(".css , .javascript", { duration: 1, x: 300, y: 5000, ease: "bounse" }, 1)
        Section_1Begin.from(".html", { duration: 1, x: 300, y: -10000, ease: "bounse" }, 1)
        Section_1Begin.from(".glases", { duration: 1, x: 1000, ease: "bounse" }, 1)
        Section_1Begin.from(".glases", { duration: 1, rotation: "360" }, 1)
    }
    useEffect(() => {
        animations()
    },[])
    const data = useStaticQuery(query)
    return (
        <section id="Cover" className="banner section-1">
            <div className="text">
                <div className="title">
                    <h1>Yeisson</h1>
                    <h1>Esteban<span>JS</span></h1>
                    <h1>Jiménez</h1>
                    <h1>Bustos</h1>
                </div>
                <p>Hello, I am a systems engineering student at the University of Cundinamarca passionate about JavaScript
                web technologies ‍<span role="img" aria-label="Technologist: Light Skin Tone">👨🏻‍💻</span> <img className="emoji" src={Colombia} alt="Colombia" /></p>

            </div>
            <div className="image">
                <div className="trasversal">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="thumbnail">

                </div>
                <Img className="glases" fluid={data.fileName.childImageSharp.fluid} alt="EstebanJS" />
                <img className="icon html" src={Html5} alt="Html 5" />
                <img className="icon css" src={Css3} alt="Css 3" />
                <img className="icon javascript" src={Javascript} alt="Javascript" />
            </div>
        </section>
    )
}
const query = graphql`
  query {
            fileName: file(relativePath: {eq: "HeadGlases.png" }) {
            childImageSharp {
            fluid(maxWidth:320 ) {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default CoverPage
