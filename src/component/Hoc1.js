import React, {Component} from 'react'

// 方法一:通过继承wrappedComponent就能得到Usual的声明周期和属性
const Hoc1=WrappedComponent=>class extends WrappedComponent{

componentDidMount() {
    console.log('didMount')
}

    render(){
        console.log(this.state,'state')
        return super.render()
    }
}
export default Hoc1


// // 方法二：渲染劫持：组件继承了WrappedComponent的render，通过劫持继承render函数
// const Hoc1 = config => WrappedComponent => class extends WrappedComponent {
//     render() {
//         //config.style赋初值{}，ES6解决了ES5参数不能指定默认值，也可以直接在传参写config(style={})
//         const {style = {}} = config;
//         const elementTree = super.render();
//         console.log(elementTree, 'ele')
//         if (config.type === 'add-style') {
//             return<div style={{...style}}>
//                 {elementTree}
//             </div>
//         }
//         return elementTree
//     }
// }
//
// export default Hoc1
