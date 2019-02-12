import React, { Component } from 'react';
import './Perfil.css';
import { PerfilDisplay } from './PerfilDisplay';
import {getUserAplications} from '../../services/aplications-service'
import axios from 'axios';

const url = "https://fixtercamp.herokuapp.com";

class Perfil extends Component {

    state = {
        isLogged: false,
        user: null
    };

    componentWillMount() {
        let user = localStorage.getItem("user");
        // user = JSON.parse(user);
        if (user) {
            // console.log("si")
            this.getUserAplications()
            this.setState({ isLogged: true, user })
        } else {
            this.setState({ isLogged: false })
            this.props.history.push("/login");
        }
    }

    getUserAplications = () => {
        axios.get(`${url}/apply/self`,{
            headers:{
                'Authorization':localStorage.getItem('token'),
                'Content-Type':'application/json'
            }
        }).then(apps=>{
            console.log(apps)
        }).catch(e=>{
            console.log(e.response)
        })
    }

    componentDidMount() {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div>
                <PerfilDisplay
                    isLogged={this.props.isLogged}
                    {...this.props.user}
                />
            </div>
        );
    }
}

export default Perfil;