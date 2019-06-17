import React, {Component} from 'react'
import {Form} from "antd";

class customerForm extends Component {
    render() {
        return ( <Form>
                <Form.Item label="客户电话">

                </Form.Item>
            </Form>
        )
    }
}

customerForm = Form.create({})(customerForm)
