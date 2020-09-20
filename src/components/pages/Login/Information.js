/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
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

const InfoForm = (props) => {
  const {
    gotoStep, setDataUser, data,
  } = props;
  const onFinish = (values) => {
    const { name, facebook, phoneNum } = values;
    setDataUser({
      ...data, name, facebook, phoneNum,
    });
    gotoStep(3);
  };

  const onFinishFailed = (errorInfo) => {
  };
  const validateName = (_, value) => {
    if (!value) return Promise.reject('Vui lòng nhập tên của bạn');
    if (value.length > 50) return Promise.reject('Tên không hợp lệ');
    return Promise.resolve();
  };
  const validatePhone = (_, value) => {
    if (!value) return Promise.reject('Vui lòng số điện thoại  của bạn');
    if (value.length < 8 || value.length > 13) return Promise.reject('Số điện thoại phải lớn hơn 8 kí tự và nhỏ hơn 13 kí tự');
    return Promise.resolve();
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
        name: data ? data.name : '',
        phoneNum: data ? data.phoneNum : '',
        facebook: data ? data.facebook : '',
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >

      <div className="filling-text">
        Các bạn hãy điền đầy đủ thông tin dưới đây nhé!
      </div>
      <Form.Item
        label="Họ và tên"
        name="name"
        // value={data ? data.name : ''}
        rules={[
          {
            required: true,
            validator: validateName,
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
            validator: validatePhone,
          },
        ]}
      >
        <Input placeholder="Số điện thoại" value={data && data.name ? data.name : ''} />
      </Form.Item>

      <Form.Item
        {...tailLayout}
        className="signup-form-button"
        // wrapperCol={{ span: 8 }}
      >
        {' '}

        <Button type="primary" htmlType="submit" className="signup-form-button">
          Tiếp tục
        </Button>
      </Form.Item>
    </Form>
  );
};
export default InfoForm;
