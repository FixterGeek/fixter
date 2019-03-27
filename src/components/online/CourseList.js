import React from 'react'
import { LessonCard } from './index';

export function CourseList() {
    return <div style={styles.container}>
        <LessonCard />
        <LessonCard />
        <LessonCard />
        <LessonCard />
    </div>
}

let styles = {
    container: {
        paddingTop: 60,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    }
}