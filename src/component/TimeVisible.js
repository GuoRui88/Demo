import React, {Component} from 'react';
import {Button} from 'antd';


export default class TimeVisible extends Component {
    constructor(props) {
        super(props)
        this.state = {
            confirmVisible: false,
            time:5
        }
    }

    handleTime = () => {
        setTimeout(() => {
            console.log(this)
            this.setState({
                confirmVisible: true
            })
        }, 3000)
        clearTimeout(5)
        setInterval(()=>{
            const currentTime=this.state.time
            this.setState({
                time:currentTime-1
            })
        },1000)
    }

    render() {
        this.handleTime()
        const {time}=this.state
        return (
            <>
                {this.state.confirmVisible &&
                <div><Button size="small" type="primary">确认公告</Button>
                    < Button size="small" type="warning">拒绝确认</Button></div>}
                {
                    !this.state.confirmVisible &&
                    <Button size="small" disabled="true">{`我确定已经仔细阅读(${time})`}</Button>
                }
            </>
        )
    }
}
