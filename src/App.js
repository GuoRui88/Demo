import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import simpleHoc from './common'

class App extends Component {
  render(){
      console.log(this.props,'props')
      return(
          <div>
              Usual
          </div>
      )
  }
}

export default simpleHoc(App);
