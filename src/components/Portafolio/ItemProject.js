import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './ItemProject.css'

const ItemProject = ({ title, description, url, img }) => {
    return (
        <div className="ItemProject">
            <div className="Image">
                <img src={img} alt={description} />
            </div>
            <div className="Content">
                <div className="header">
                    <h3>{title}</h3>
                </div>
                <div className="body">
                    <p>{description}</p>
                </div>
            </div>
            <div className="Link">
                <FontAwesomeIcon onClick={() => window.open(url, '_blank')} icon={faChevronRight} size="2x" />
            </div>
        </div>
    )
}

export default ItemProject
