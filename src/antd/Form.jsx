import React from 'react'
import { Form, Input, Button } from 'antd'

const FormItem = Form.Item

class TryForm extends React.Component {
  state = {
    confirmDirty: false,
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  /**
   * 验证密码
   */
  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  /**
   * 验证确认密码 
   */
  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };
  
  render() {
    const { getFieldDecorator } = this.props.form

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <div>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <FormItem label="姓名" >
            { getFieldDecorator('userName', {
              rules: [
                {
                  required: true,
                  message: 'userName is required'
                }
              ]
            })(<Input />)}
          </FormItem>

          <FormItem label="密码" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: this.validateToNextPassword,
                }
              ]
            })(<Input.Password />)}
          </FormItem>

          <FormItem label="确认密码" hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ]
            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
          </FormItem>

          <FormItem {...tailFormItemLayout}>
            <Button 
              type="primary" 
              htmlType="submit">提交</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default Form.create({})(TryForm)
