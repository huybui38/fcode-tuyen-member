/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Result from 'antd/lib/result';
import 'antd/lib/result/style/index.css';
import './SuccessConfirm.css';

const SuccessConfirm = () => (
  <Result
    id="result-confirm"
    className="success-confirm"
    status="success"
    title="Đăng ký thành công!!"
    subTitle="Dưới đây là thông tin của bạn, vui lòng theo dõi fanpage và check email thường xuyên để nhận thông báo từ CLB nhé!!"
  />
);
export default SuccessConfirm;
