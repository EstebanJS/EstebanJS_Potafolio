import React from 'react'

import './PfContent.css'
import ItemProject from './ItemProject';


const PfContent = () => {
    const projects = [
        {
            title: "IP Address Tracker",
            description: "Reto de Frontend Mentor, geo buscador de direcciones IP y URL.",
            url: "https://ip-address-tracker-master.vercel.app/",
            img:"https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/zfgce1seaqfllpuktpai.jpg"
        },
        {
            title: "Gifnet",
            description: "Uso de la API GIPHY, en un bucador de gif's.",
            url: "https://gitnet.estebanjs.vercel.app/",
            img:"https://user-images.githubusercontent.com/41396044/100250300-822c0200-2f0b-11eb-8d09-7b09e1da8ae2.png"
        }
    ]
    return (
        <section className="pfContent">
            <div className="Section">
                <div className="SectionHeader">
                    <h3>Lista de proyectos</h3>
                </div>
                <div className="SectionContent">
                    {
                        projects.map(item =>
                            <ItemProject key={item.title} title={item.title} description={item.description} url={item.url} img={item.img}/>
                        )
                    }

                </div>
            </div>
            {/* <div className="Section">
                <div className="SectionHeader">
                    <h3>GitProfile</h3>

                </div>
            </div> */}
        </section>
    )
}



export default PfContent
