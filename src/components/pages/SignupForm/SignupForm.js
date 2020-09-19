import React, { useState } from 'react';
import {
  Form,
  Input,
  Cascader,
  Select,
  Button,
} from 'antd';
import 'antd/lib/form/style/index.css';
import 'antd/lib/input/style/index.css';
import 'antd/lib/cascader/style/index.css';
import 'antd/lib/select/style/index.css';
import 'antd/lib/button/style/index.css';
import 'antd/lib/col/style/css';
import 'antd/lib/row/style/css';
import './SignupForm.css';

const { Option } = Select;
const majority = [
  {
    value: 'KTPM',
    label: 'Kỹ thuật phần mềm',
  },
  {
    value: 'ATTT',
    label: 'An toàn thông tin',
  },
  {
    value: 'TTNT',
    label: 'Trí tuệ nhân tạo',
  },
  {
    value: 'TKĐH',
    label: 'Thiết kế đồ họa',
  },
  {
    value: 'Others',
    label: 'Khác',
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
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

const RegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="84">+84</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: '84',
      }}
      scrollToFirstError
    >

      <div className="form-header">
        <h1>Form đăng ký</h1>
      </div>

      <Form.Item
        name="name"
        label={(
          <span className="label">
            Họ và tên
          </span>
        )}
        rules={[
          {
            required: true,
            message: 'Hãy nhập họ tên của bạn',
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="Họ và tên" />
      </Form.Item>

      <Form.Item
        name="id"
        label={(
          <span className="label">
            Mã số sinh viên
          </span>
        )}
        rules={[
          {
            required: true,
            message: 'Hãy nhập MSSV của bạn',
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="MSSV" />
      </Form.Item>

      <Form.Item
        name="email"
        label={(
          <span className="label">
            E-mail
          </span>
          )}
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Hãy nhập E-mail của bạn',
          },
        ]}
      >
        <Input placeholder="E-mail" />
      </Form.Item>

      <Form.Item
        name="facebook"
        label={(
          <span className="label">
            Facebook
          </span>
        )}
        rules={[
          {
            required: true,
            message: 'Hãy nhập link facebook của bạn',
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="Link facebook" />
      </Form.Item>

      <Form.Item
        name="major"
        label={(
          <span className="label">
            Chuyên ngành
          </span>
          )}
        rules={[
          {
            type: 'array',
            required: true,
            message: 'Bạn học chuyên ngành nào?',
          },
        ]}
      >
        <Cascader options={majority} />
      </Form.Item>

      <Form.Item
        name="phone"
        label={(
          <span className="label">
            Số điện thoại
          </span>
          )}
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Đăng ký
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
