import React from 'react'
import { Form, Input, Button } from 'antd'

const FormItem = Form.Item

class TryForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        userName: ''
      }
    }
  }
  
  render() {
    return (
      <div>
        <Form>
          <FormItem
            name="userName"
            label="姓名"
            rules={[{ required: true, message: '请输入用户名' }]}>
            <Input />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">提交</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default TryForm
