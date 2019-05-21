import React, {Component} from 'react';
import './App.css';
import simpleHoc from './component/common'
import TimeVisible from "./component/TimeVisible";

class App extends Component {
    render() {
        console.log(this.props, 'props')
        return (
            <>
                <div>
                    Usual
                </div>
                <TimeVisible ></TimeVisible>
            </>
        )
    }
}

export default simpleHoc(App);
