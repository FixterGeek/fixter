import React from 'react'
import {
    videoCard,
    content,
    overlay,
    circle,
    description,
} from './OnlineDetail.module.css'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'

export default function VideoCover({ body, video, title, buttonText, buttonText2, helpText, ...props }) {
    return (
        <div {...props} className={videoCard}>
            <div className={overlay} ></div>
            <div className={content}>
                <video autoPlay loop src={video} ></video>
                <span>curso online</span>
                <h1>{title}</h1>
                <p className={description}>{body}</p>
                <button>{buttonText}</button>
                <button>{buttonText2}</button>
                <p style={{ marginBottom: 50 }} />
                <span>{helpText}</span>
                <p style={{ marginBottom: 10 }} />
                <FontAwesome size="3x" className={circle} name="play" />
            </div>

        </div>
    )
}

VideoCover.propTypes = {
    video: PropTypes.string,
    title: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    buttonText2: PropTypes.string,
    helpText: PropTypes.string,
    body: PropTypes.string.isRequired
}

VideoCover.defaultProps = {
    video: "https://d20vrrgs8k4bvw.cloudfront.net/videos/en-US/video-bg-nd892.mp4",
    title: "Programming for Data Science",
    buttonText: "Comienza Ahora",
    buttonText2: "Descarga el Temario",
    helpText: "Mira el trailer del curso",
    body: "Prepare for a data science career by learning the fundamental data programming tools: Python or R, SQL, command line, and git. Choose to enroll in either the Python or R track."
}
