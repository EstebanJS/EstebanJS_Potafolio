import React, { useEffect, useState } from 'react'
import './itemSlider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import gsap from 'gsap';
const ItemSlider = () => {
    const [index, setIndex] = useState(0)
    const [slider, setSlider] = useState([
        {
            title: "Html 5",
            description: "It is a new version of the language HTML, with new elements, attributes, and behaviors, and a larger set of technologies that allows the building of more diverse and powerful Web sites and applications.",
            color: "#DD4B25",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/512px-HTML5_Badge.svg.png"
        },
        {
            title: "Css 3",
            description: "Cascading Style Sheets is a language that is used to illustrate the look, style, and format of a document written in any markup language. In simple words, it is used to style and organize the layout of Web pages.",
            color: "#0170BF",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/428px-CSS.3.svg.png"
        },
        {
            title: "Javascript",
            description: "JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. JavaScript gives web pages interactive elements that engage a user.",
            color: "#F0DB4F",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"
        },
        {
            title: "React",
            description: "React is a JavaScript library for building user interfaces. ",
            color: "#61DAFB",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
        }, {
            title: "Vue",
            description: "Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. ",
            color: "#41B883",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png"
        }
    ])
    const NextSlide = () => {
        if (index === slider.length - 1) {
            setIndex(0)
        }
        else {
            setIndex(index + 1)
        }
    }

    const AterSlide = () => {
        if (index === 0) {
            setIndex(slider.length - 1)
        }
        else {
            setIndex(index - 1)
        }
    }

    useEffect(() => {
        let animationsLeft = gsap.timeline()
        animationsLeft.from('.left-part', {
            duration: 0.5,
            x: '-100%',
            ease: "bounse"
        })
        animationsLeft.from('.info', {
            duration: 0.5,
            x: '-100%',
            ease: "bounse"
        })
        let animationsRight = gsap.timeline()
        animationsRight.from('.Logo',
            {
                duration: 0.5,
                y: '-100vh',
                ease: "bounse"
            })
        animationsRight.from('.text-back-gorund',
            {
                duration: 0.5,
                y: '100vh',
                ease: "bounse"
            })

    }, [index])
    return (
        <div className="content-item">
            <div className="info">
                <h1 className="title-item">{slider[index].title}</h1>
                <p className="text--normal">
                    {slider[index].description}
                </p>
            </div>
            <p className="text-back-gorund">{slider[index].title}</p>
            <div className="left-part" style={{ background: slider[index].color }}>
            </div>
            <div className="Logo">
                <img src={slider[index].image} alt={slider[index].title} />
            </div>
            <div className="Control">
                <div onClick={AterSlide}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <div onClick={NextSlide}>
                    <FontAwesomeIcon icon={faChevronRight} />

                </div>
            </div>
        </div>
    )
}

export default ItemSlider
