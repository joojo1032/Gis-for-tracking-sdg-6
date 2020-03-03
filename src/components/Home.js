import React from 'react';
import {Head} from './Header';
import './Home.css';
import {Slider} from './Carousel';
import { Content } from './Content';


export class Home extends React.Component{
    render(){
        return(
            <div className="body-container">
                <Head/>
                <Slider/>
                <Content/>
            </div>
        )
    }
}