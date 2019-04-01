import React, { useReducer } from 'react'

let MenuContext = React.createContext()
let { Provider, Consumer } = MenuContext

function MenuProvider({ children }) {
    let init = {
        active: false,
        show: true,
        courseName: "Testing Course",
        lessonName: "Lesson name test",
        lessonNumber: 2,
        videos: [
            {
                order: 0,
                title: "Testing video",
                link: "NkWDPe6PyqI",
                done: true
            },
            {
                order: 1,
                title: "Testing video",
                link: "z66flcvibig"
            },
            {
                order: 2,
                title: "Testing video",
                link: "-dA6g_E0qrg"
            }
        ],
        currentIndex: 0,
        currentVideo: {
            order: 0,
            title: "Testing video",
            link: "NkWDPe6PyqI"
        }
    }
    let reducer = (prevState, newState) => ({ ...prevState, ...newState })
    let [state, setState] = useReducer(reducer, init)

    function getLesson(id) {
        setState({ lessonName: "gotten lesson", active: true })
    }

    function toggle() {
        setState({ show: !state.show })
    }
    function close() {
        setState({ show: false })
    }
    function open() {
        setState({ show: true })
    }

    function setVideo(index) {
        let video = state.videos[index]
        video.done = true
        setState({
            currentIndex: index,
            currentVideo: video
        })

        // some where we have to update this state into the user profile
        // in order to save the percentage of view
    }

    return <Provider value={{
        setVideo,
        state,
        getLesson,
        toggle,
        open,
        close
    }}>
        {children}
    </Provider>
}

export { MenuProvider, Consumer as MenuConsumer, MenuContext }