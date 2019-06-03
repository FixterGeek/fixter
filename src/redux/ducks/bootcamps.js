import axios from 'axios'
let url = ""

const GET_BOOTCAMPS_SUCCESS = "GET_BOOTCAMPS_SUCCESS"

export default function reducer(state=[], action){
    switch(action.type){
        case GET_BOOTCAMPS_SUCCESS:
            return action.payload
        default:
            return state
    }
}

let getBootcampsSuccess = (bootcamps)=>({type:GET_BOOTCAMPS_SUCCESS,bootcamps})

export let getBootcamps = () => (dispatch) => {
    return axios.get(url).then(res=>{
        getBootcampsSuccess(res.data)
        return res.data
    })
}