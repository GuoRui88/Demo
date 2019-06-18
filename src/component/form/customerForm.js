// 只加载Component一个方法，其他方法不加载，这种加载称为编译时加载
// ES6可以再编译时完成模块加载
import React, {Component} from 'react'
import {Form, Input, Button, Col, Row} from "antd";
import {templateElement} from "@babel/types";

const options = {
    mapPropsToFields: (props) => {
        console.log(props.value)
        const value = props.value

    }
}
const FormItem = Form.Item
const formLayout = {
    labelCol: {
        xs: {span: 8},
    },
    wrapperCol: {
        xs: {span: 16},
    }
}

class customerForm extends Component {
    handleTel = (r, v, c) => {
        alert("调用成功")
        c()
    }

    handleSubmit = () => {
        this.form.validateFields(async (err, value) => {
            if (!err) {
                console.log(value)
            }
        })
    }

    render() {
        const {getFieldDecorator} = this.props.form
        return (<>
                <Row>
                    <Col span={18}>
                        <Form layout="vertical" {...formLayout} labelAlign="right">
                            <FormItem label="客户电话:">
                                {getFieldDecorator('tel', {
                                    rules: [
                                        {required: true, message: '必填项'},
                                        {pattern: '^/d{11}$', message: '手机号合适错误'},
                                        {
                                            transform: (value) => {
                                                value: value.trim()
                                                console.log(value)
                                            },
                                        },
                                        {validator: this.handleTel}
                                    ]
                                })}
                                <Input type="text" placeholder="客户电话"/>
                            </FormItem>
                        </Form>
                    </Col>
                    <Col span={6}>
                        <Button onClick={this.handleSubmit} type="primary">提交</Button>
                    </Col>
                </Row>
            </>
        )
    }
}

//使用Form.create()创建的表单有自动收集数据和校验的功能，经过create()包装过的组件自带
//this.props.form属性，this.props.form提供了很多API来处理数据，如getFieldDecorator等。
export default Form.create(options)(customerForm)


