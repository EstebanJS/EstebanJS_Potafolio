
import React, { useRef, useEffect, useState } from "react"
import './style.css'
import Img from 'gatsby-image';
import { graphql, useStaticQuery, Link } from 'gatsby';
import gsap from "gsap";


const Header = () => {
  const ListMenu = [
    {
      name: "Skils",
      url: "/#Skils"
    },
    {
      name: "Personal Projects",
      url: "/#Projects"
    },
    {
      name: "Others Proyects",
      url: "/#OtherProyects"
    },
    {
      name: "Contact",
      url: "/#Contact"
    },
  ]

  const data = useStaticQuery(query)

  let headerContent = useRef(null)

  const [menu, setMenu] = useState(false)

  useEffect(() => {
    const logo = headerContent.firstElementChild;
    gsap.from(logo, { duration: 0.5, x: -700, ease: "bounse" })
    gsap.from(".hamburguer .line", { duration: 0.5, x: 700, ease: "bounse", stagger: 0.25 })
  }, [])

  return (
    <>
      <header ref={el => headerContent = el}>
        <Link to="/#Cover">
          <div className="logo">
            <Img fluid={data.fileName.childImageSharp.fluid} alt="EstebanJS" />
          </div>
        </Link>
        <div id="hamburguer" className={menu ? "hamburguer open" : "hamburguer"} onClick={() => setMenu(!menu)} role="button" tabIndex={0} onKeyDown={() => setMenu(!menu)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </header>
      <ul className={menu ? 'menu-open active' : 'menu-open'}>
        {
          ListMenu.map(item => (
            <li>
              <Link onClick={() => setMenu(!menu)} to={item.url} >{item.name}</Link>
            </li>
          ))
        }

      </ul>
    </>
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
