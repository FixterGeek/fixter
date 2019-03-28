import React from 'react'
import { container } from './OnlineDetail.module.css'
import PropTypes from 'prop-types'
import VideoCover from './VideoCover'

export function OnlineDetail({ className, image, number, title, buttonText, ...props }) {
    return (
        <div {...props} className={container + " " + className}>
            <VideoCover />
        </div>
    )
}

OnlineDetail.propTypes = {
    title: PropTypes.string.isRequired
}

OnlineDetail.defaultProps = {
    title: "Before You Get Started",
    image: "http://blog.fixter.org/content/images/2017/04/geek_circulo_logo-1.png"
}

