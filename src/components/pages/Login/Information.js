import React from 'react';
import {
  Form, Input, Button,
} from 'antd';
import 'antd/lib/form/style/index.css';
import 'antd/lib/input/style/index.css';
import 'antd/lib/button/style/index.css';
import 'antd/lib/radio/style/index.css';
import 'antd/lib/col/style/css';
import 'antd/lib/row/style/css';
import './InfoForm.css';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    xl: {
      span: 10,
    },
    md: {
      span: 12,
    },
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const InfoForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >

      <div className="filling-text">
        Các bạn hãy điền đầy đủ thông tin dưới đây nhé!
      </div>
      <Form.Item
        label="Họ và tên"
        name="fullname"
        rules={[
          {
            required: true,
            message: 'Hãy nhập họ tên của bạn!',
          },
        ]}
      >

        <Input placeholder="Họ và tên" />
      </Form.Item>

      <Form.Item
        label="Facebook"
        name="facebook"
        rules={[
          {
            required: true,
            message: 'Hãy nhập link facebook của bạn',
          },
        ]}
      >
        <Input placeholder="Link facebook" />
      </Form.Item>

      <Form.Item
        label="Số điện thoại"
        name="phoneNum"
        rules={[
          {
            required: true,
            message: 'Hãy nhập số điện thoại của bạn!',
          },
        ]}
      >
        <Input placeholder="Số điện thoại" />
      </Form.Item>

      <Form.Item
        {...tailLayout}
        className="signup-form-button"
        // wrapperCol={{ span: 8 }}
      >
        {' '}

        <Button type="primary" htmlType="submit" className="signup-form-button">
          Đăng ký
        </Button>
      </Form.Item>
    </Form>
  );
};
export default InfoForm;
