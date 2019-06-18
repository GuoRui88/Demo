import React, {Component} from 'react';
import TimeVisible from "./component/TimeVisible";
import HocSub from './component/HocSub'
import HocSub1 from './component/HocSub1'
import CustomerForm from './component/form/customerForm'
export default class App extends Component {

    render() {
        console.log(this.props, 'props')
        return (
            <>
                {/*<HocSub/>*/}
                {/*<HocSub1></HocSub1>*/}
                {/*<TimeVisible></TimeVisible>*/}
                <CustomerForm ></CustomerForm>
            </>
        )
    }
}
