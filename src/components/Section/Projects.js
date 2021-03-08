import React from 'react'
import ItemProyect from './ItemProyect'
import './projets.css'
// IMAGES
import QrTools from '../../images/QrTools.png'
import GIFNET from '../../images/GIFNET.png'

const Projects = () => {
    const dataProjects = [
        {
            title:"QrTools",
            link:"https://qr-tools-vue.estebanjs.vercel.app/",
            img:QrTools
        },
        {
            title:"Gitnet",
            link:"https://gitnet-estebanjs.vercel.app/",
            img:GIFNET
        }
    ]
    return (
        <div className="content-projects">
            <div className="carrousel">
                {
                    dataProjects.map( item=>(
                        <ItemProyect key={item.title} title={item.title} link={item.link} img={item.img}/>
                    ))
                }
                
            </div>
        </div>
    )
}

export default Projects
