import React, {Component} from 'react'
import Hoc1 from './Hoc1'

// @Hoc1({type:'add-style',style:{color:'red'}})
class HocSub1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usual: 'usual'
        }
    }

    render() {
        return (
            <div>高阶组件栗子</div>
        )
    }
}

// export default Hoc1(HocSub1,{type:'add-style',style:{color:'red'}})

export default Hoc1(HocSub1)

