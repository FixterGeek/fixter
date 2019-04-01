import React from 'react'
import { flex2 } from './Viewer.module.css'

export default function VideoViewer({ link = "NkWDPe6PyqI", youtube = true }) {
    if (!youtube) return <video src="lol"></video>
    return (
        <div className={flex2}>
            <iframe height="100%" width="100%" src={`https://www.youtube.com/embed/${link}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h1>Resources extra</h1>
        </div>
    )
}