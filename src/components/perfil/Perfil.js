import React, { Component } from 'react';
import './Perfil.css';
import { PerfilDisplay } from './PerfilDisplay';
import {getUserAplications} from '../../services/aplications-service'
import axios from 'axios';

const url = "https://fixtercamp.herokuapp.com";

class Perfil extends Component {

    state = {
        isLogged: false,
        user: null,
        applications:[]
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

    pay=(app)=>{
        localStorage.setItem('currentApplication', JSON.stringify(app))
        this.props.history.push('/pay')
    }

    getUserAplications = () => {
        axios.get(`${url}/apply/self`,{
            headers:{
                'Authorization':localStorage.getItem('token'),
                'Content-Type':'application/json'
            }
        }).then(r=>{
            this.setState({applications:r.data})
        }).catch(e=>{
            console.log(e.response)
        })
    }

    componentDidMount() {
        window.scroll(0, 0)
    }
    render() {
        const {applications} = this.state
        return (
            <div>
                <PerfilDisplay
                    applications={applications}
                    pay={this.pay}
                    isLogged={this.props.isLogged}
                    {...this.props.user}
                />
            </div>
        );
    }
}

export default Perfil;