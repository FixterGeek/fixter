import React, { useContext, useEffect } from 'react'
import { menu, current, closed, opened } from './Viewer.module.css'
import { MenuContext } from '../../context/MenuContext'
import VideoButton from './VideoButton';


export default function LessonsMenu({ history }) {
    let { state } = useContext(MenuContext)
    let { lessonName, lessonNumber, show, videos = [] } = state

    return (
        <div className={show ? opened : closed}>
            <nav className={menu}>
                <div className={current}>
                    <span>Lesson {lessonNumber}</span>
                    <span>{lessonName}</span>
                </div>

                {videos.map((el, i) => {
                    return (
                        <VideoButton key={i} {...el} />
                    )
                })}

            </nav>
        </div>
    )
}