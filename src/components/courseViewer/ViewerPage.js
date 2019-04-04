import React, { useEffect, useContext } from 'react'
import LessonsMenu from './LessonsMenu';
import { MenuContext } from '../../context/MenuContext'
import VideoViewer from './VideoViewer';

export default function Viewer({ match }) {
    let { getLesson, state, clearCourse } = useContext(MenuContext)
    let { currentVideo } = state
    useEffect(() => {
        let { lessonId, courseId } = match.params
        getLesson(courseId, lessonId)
        return clearCourse
    }, [])

    return (
        <div style={{ display: "flex", paddingTop: 60 }}>
            <LessonsMenu />
            <VideoViewer {...currentVideo} />
        </div>
    )
}