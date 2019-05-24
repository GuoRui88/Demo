import React, {Component} from 'react';
import './App.css';
import TimeVisible from "./component/TimeVisible";
import HocSub from './component/HocSub'

export default class App extends Component {

    render() {
        console.log(this.props, 'props')
        return (
            <>
                <HocSub/>
                <TimeVisible></TimeVisible>


            </>
        )
    }
}
