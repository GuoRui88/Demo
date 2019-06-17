import React,{Component} from 'react'
import Hoc from './Hoc'

class  HocSub extends Component{
    render(){
        return(
            <div>高阶组件栗子1</div>
        )
    }
}
export default Hoc(HocSub)
