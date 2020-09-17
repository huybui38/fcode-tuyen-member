import React from 'react';
import './Login.css';

import Divider from 'antd/lib/divider';
import Steps from 'antd/lib/steps';
import 'antd/lib/divider/style/index.css';
import 'antd/lib/steps/style/index.css';

import GoogleLogin from 'react-google-login';

const { Step } = Steps;

function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-heading">
        <h1>ĐĂNG KÝ THÀNH VIÊN CLB F-CODE</h1>
        <p className="instruction">Hướng dẫn: Vui lòng hoàn thành theo form sau để đăng ký tham gia thử thách của CLB. Các bạn vui lòng theo dõi timeline để biết được lịch trình cụ thể nhé.</p>
      </div>

      <div className="step-wrapper">
        <Steps current={0}>
          <Step title="Bước 1" description="Đăng nhập google." />
          <Step title="Bước 2" description="Điền form đăng ký." />
          <Step title="Bước 3" description="Xác nhận" />
        </Steps>
        <Divider />
      </div>

      <div className="login-section">
        <p>Vui lòng sử dụng mail FPT để đăng nhập</p>
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Sign in with Google"
          cookiePolicy="single_host_origin"
        />
      </div>
    </div>
  );
}
export default Login;
