import React from 'react'
import './itemProyect.css'


const ItemProyet = ({ title, link, img }) => {
    return (
        <div className="card">
            <img src={img} alt={title}/>
            <div className="card__head"><a href={link} target="_blank"  rel="noopener noreferrer">{title}</a></div>
        </div>
    )
}

export default ItemProyet

