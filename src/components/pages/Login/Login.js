/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from 'react';
import './Login.css';
import Divider from 'antd/lib/divider';
import Steps from 'antd/lib/steps';
import Alert from 'antd/lib/alert';
import 'antd/lib/alert/style/index.css';
import 'antd/lib/divider/style/index.css';
import 'antd/lib/steps/style/index.css';
import LoginSection from './LoginSection';
import InfoForm from './Information';
import Verify from './Verify';
import Loading from './Loading';
import { firebase } from '../../../firebase/firebase';

const { Step } = Steps;
function Login() {
  const [userData, setUserData] = useState({});
  const [step, setStep] = useState(0);
  const [isConfirm, setIsConfirm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const gotoStep = (nextStep) => setStep(nextStep - 1);
  useEffect(() => {
    setLoading(true);
    console.log('loading');
    firebase.auth().signOut()
      .then(() => setLoading(false))
      .catch((e) => {
        console.error(e);
        //   setLoading
      });
  }, []);
  let ContentSection;
  switch (step) {
    case 0:
      ContentSection = <LoginSection gotoStep={gotoStep} setError={setError} setDataUser={setUserData} setIsConfirm={setIsConfirm} />;
      break;
    case 1:
      ContentSection = <InfoForm gotoStep={gotoStep} setError={setError} setDataUser={setUserData} data={userData} />;
      break;
    case 2:
      ContentSection = <Verify gotoStep={gotoStep} confirm={{ isConfirm, setIsConfirm }} setError={setError} data={userData} />;
      break;

    default:
      break;
  }
  return (
    <div className="login-wrapper">
      <div className="login-heading">
        <h1>ĐĂNG KÝ THÀNH VIÊN CLB F-CODE</h1>
        <p className="instruction">Hướng dẫn: Vui lòng hoàn thành theo form sau để đăng ký tham gia thử thách của CLB. Các bạn vui lòng theo dõi timeline để biết được lịch trình cụ thể nhé.</p>
      </div>
      <div className="step-wrapper">
        <Steps current={step}>
          <Step title="Bước 1" description="Đăng nhập google." />
          <Step title="Bước 2" description="Điền form đăng ký." />
          <Step title="Bước 3" description="Xác nhận" />
        </Steps>
        <Divider />
        {error ? (
          <Alert
            message="Đã có lỗi xảy r"
            description={error}
            type="error"
            closable
            onClose={() => setError(null)}
          />
        ) : ''}

      </div>
      {loading ? <Loading /> : ContentSection}
    </div>
  );
}
export default Login;
