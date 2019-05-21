import React, {Component} from 'react'

const simpleHoc = WrappedComponent => {
    return class extends Component {
        render() {
            return<WrappedComponent {...this.props}/>
        }
    }
}

export default simpleHoc
