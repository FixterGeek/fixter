import React from 'react'
import { CourseCard } from './index';

export function CourseList() {
    return <div style={styles.container}>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
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