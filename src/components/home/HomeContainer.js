import React, { Component } from 'react';
import './Home.css';
import {AboutDisplay} from './AboutDisplay';
import {CommentDisplay} from './CommentDisplay';
import {BlogDisplay} from './BlogDisplay';
import {Slide} from "./Slide";
import {Selection} from "./Selection";
import {Info} from "./Info";

class HomeContainer extends Component {
    componentWillMount(){
        //console.log(localStorage.getItem("user"));
    }
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div>
				<Slide/>
				<AboutDisplay/>
				<Selection/>
				<CommentDisplay/>
				<Info/>
				<BlogDisplay/>
            </div>
        );
    }
}

export default HomeContainer;
