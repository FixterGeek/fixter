import React from 'react'
import { card, icon, progress } from './LessonCard.module.css'
import PropTypes from 'prop-types'

export function LessonCard({ className, image, number, title, buttonText, ...props }) {
    return (
        <div {...props} className={card + " " + className}>
            <article className={icon}>
                <img src={image} alt="icon" />
            </article>
            <article>
                <span>Lesson {number}</span>
                <h4>{title}</h4>
                <button>{buttonText}</button>
            </article>
            <article>
                <progress className={progress} max="100" value="60" /> 22% Visto

            </article>

        </div>
    )
}

LessonCard.propTypes = {
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    image: PropTypes.string
}

LessonCard.defaultProps = {
    number: 1,
    title: "Before You Get Started",
    buttonText: "View Lesson",
    // image: "https://i.pinimg.com/originals/44/f9/23/44f9239764654899e124ce738c7f3ae0.png"
    image: "http://blog.fixter.org/content/images/2017/04/geek_circulo_logo-1.png"
}

