import React from 'react'
import './frontendSection.css'
import ItemSlider from './ItemSlider.js'


const FrontendSection = () => {

    return (
        <section id="Sec2" className="banner section-2">
            <div className="hader-content">
                <h1 className="title-section">Frontend Skils</h1>
            </div>
            <div className="main-section">
                <ItemSlider/>
            </div>
        </section>
    )
}



export default FrontendSection
