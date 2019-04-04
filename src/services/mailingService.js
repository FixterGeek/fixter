import axios from 'axios'

let url = 'https://fixtercamp.herokuapp.com/mailing/contacto'
// let format = {
// 	"displayName":"blissito",
//     "email":"fixtergeek@gmail.com",
//     "tel":"7712412825",
// 	"text":"Holi"
// }

export function contactMail(body){
    return axios.post(url, body)
    .then(res=>res.data)
}