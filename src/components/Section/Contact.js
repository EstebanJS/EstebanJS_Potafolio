import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../utils/fontawesome'
import './contac.css'

const Contact = () => {
    const SocialNetwork = [
        {
            url: "https://github.com/EstebanJS",
            icon: ["fab", "github-alt"],
            name: "Github",
            username: "EstebanJS"
        }, {
            url: "https://www.linkedin.com/in/yeisson-esteban-jimenez-bustos/",
            icon: ["fab", "linkedin"],
            name: "Linkedin",
            username: ""
        }, {
            url: "mailto:yeisson310@hotmail.com ",
            icon: ["far", "envelope"],
            name: "Mail",
            username: ""
        }, {
            url: "https://www.instagram.com/estebanjs_/",
            icon: ["fab", "instagram"],
            name: "Instagram",
            username: "@estebanjs_"
        }

    ]
    return (
        <div className="contact-section">
            <h1> I´m ready for job with you</h1>
            <div className="contac-sections-items">
                {
                    SocialNetwork.map(item => (<CardContact url={item.url} icon={item.icon} name={item.name} username={item.username} />))
                }
            </div>
        </div>
    )
}

export default Contact

const CardContact = ({ url, icon, name, username, }) => {
    return (
        <a href={url} target="_blanck">
            <div className="card-contact">
                <h1><FontAwesomeIcon icon={icon} /></h1>
                <p>{name}</p>
                <h2>{username}</h2>
            </div>
        </a>
    )
}