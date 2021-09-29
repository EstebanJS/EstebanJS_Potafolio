import React from 'react'
import './section.css'
import Slider from './Slider.js'
import Projects from './Projects.js'
import Contact from './Contact'
import OtherProjects from './OtherProjects'


const Section = ({ title, idSection, ItemStyle }) => {
    const renderChild = (param) => {
        switch (param) {
            case 1:
                return (<Slider />)
            case 2:
                return (<Projects />)
            case 3:
                return (<Contact />)
                case 4:
                    return (<OtherProjects/>)
            default:
                return (<></>)
        }
    }
    return (
        <section id={idSection} className="banner section-2">
            <div className="hader-content">
                <h1 className="title-section">{title}</h1>
            </div>
            <div className="main-section">
                {
                    renderChild(ItemStyle)

                }

            </div>
        </section>
    )
}



export default Section
