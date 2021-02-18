
import React, { useRef,useEffect } from "react"
import './style.css'
import Img from 'gatsby-image';
import { graphql, useStaticQuery, Link } from 'gatsby';
import gsap from "gsap";


const Header = () => {
  const data = useStaticQuery(query)
  let headerContent = useRef(null)
  useEffect(() => {
    const logo = headerContent.firstElementChild;
    gsap.from(logo,{duration:0.5,x:-700,ease:"bounse"})
    gsap.from(".hamburguer .line",{duration:0.5,x:700,ease:"bounse",stagger:0.25})
  })
  return (
    <header ref={el => headerContent = el}>
      <Link to="/">
        <div className="logo">
          <Img fluid={data.fileName.childImageSharp.fluid} alt="EstebanJS" />
        </div>
      </Link>
      <div id="hamburguer" className="hamburguer">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  )
}

const query = graphql`
  query {
    fileName: file(relativePath: { eq: "Logo.png" }) {
      childImageSharp {
        fluid(maxWidth:600 ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


export default Header
