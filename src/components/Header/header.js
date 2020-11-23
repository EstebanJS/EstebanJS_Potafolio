
import React from "react"
import './style.css'
import Img from 'gatsby-image';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { useState } from "react";

const Header = () => {
  const data = useStaticQuery(query)
  const [menu, setMenu] = useState(false)
  const ToggleMenu = () => {
    setMenu(!menu)
  }
  return (
    <header>
      <nav>
        <div className="container">
          <Link to="/">
            <Img className="logo" fluid={data.fileName.childImageSharp.fluid} alt="EstebanJS" />
          </Link>
          <div className={menu ? 'menu open' : 'menu'}>
            <ul>
              {/* <li><Link onClick={ToggleMenu} onKeyDown={ToggleMenu} to="/portafolio">Portafolio</Link></li> */}
              {/* <li><Link onClick={ToggleMenu} onKeyDown={ToggleMenu} to="/">Contacto</Link></li> */}
              {/* <li><Link onClick={ToggleMenu} onKeyDown={ToggleMenu} to="/">Blog</Link></li> */}
            </ul>
          </div>
          <div role="button" tabIndex={0} id="hamburguer-menu" className={menu ? 'open' : ''} onClick={ToggleMenu} onKeyDown={ToggleMenu}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  )
}

const query = graphql`
  query {
    fileName: file(relativePath: { eq: "Logo.png" }) {
      childImageSharp {
        fluid(maxHeight: 80,maxWidth: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


export default Header
