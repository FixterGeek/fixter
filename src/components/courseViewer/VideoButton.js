import React, { useContext } from 'react'
import FontAwesome from 'react-fontawesome'
import { menuItem, menuItemActive } from './Viewer.module.css'
import { MenuContext } from '../../context/MenuContext'


export default function VideoButton({ order, title, link, done }) {
    let { state, setVideo } = useContext(MenuContext)
    let { currentIndex } = state
    let active = currentIndex === order

    function handleClick() {
        setVideo(order)
    }

    return (
        <div
            onClick={handleClick}
            className={active ? menuItemActive : menuItem}>
            {done ? <FontAwesome
                style={{ padding: 15, color: "lightgreen" }}
                name="check-circle" /> : <FontAwesome
                    style={{ padding: 15 }}
                    name="circle" />}
            <span>{order + 1}. </span>
            <span>
                {title}
            </span>

        </div>
    )
}

{/* <FontAwesome name="check-circle" /> */ }