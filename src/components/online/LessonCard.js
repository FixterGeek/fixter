import React from 'react'
import { card } from './LessonCard.module.css'
import PropTypes from 'prop-types'

export function LessonCard({ className, logo, type, title, body, buttonText, ...props }) {
    return (
        <div {...props} className={card + " " + className}>
            <img src={logo} alt="course icon" />
            <span>{type}</span>
            <h4>{title}</h4>
            <p>
                {body}
            </p>

            <hr />
            <button>{buttonText}</button>
        </div>
    )
}

LessonCard.propTypes = {
    logo: PropTypes.string,
    title: PropTypes.string.isRequired
}

LessonCard.defaultProps = {
    logo: "http://blog.fixter.org/content/images/2017/04/geek_circulo_logo-1.png",
    type: "Curso",
    title: "Aprende Redux fácilmente",
    body: "With this major update to the JavaScript language, a number of syntax improvements have been added. In this lesson, you'll learn to improve your JavaScript code with these syntax updates.",
    buttonText: "Ver Curso"
}

