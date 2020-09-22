/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
import React from 'react';
import './LoginSection.css';
import logo from './gg-logo.png';
import { signInWithGoogle, checkExist } from '../../../firebase/user';

const LoginSection = (props) => {
  const {
    gotoStep, setError, setDataUser, setIsConfirm,
  } = props;
  const onClick = (event) => {
    event.preventDefault();
    signInWithGoogle()
      .then(async (result) => {
        setError(false);
        const { email, displayName: name } = result.user;
        const user = await checkExist();
        if (user) {
          setDataUser({
            email: user.email,
            name: user.name,
            phoneNum: user.phone,
            facebook: user.facebook,
            year: user.year,
          });
          setIsConfirm(true);
          gotoStep(3);
        } else {
        //   console.log(`Step 1 => ${email}`);
          // validate email
          //   if (!email.match(/^([\w]*)+\@fpt\.edu\.vn$/)) {
          //     return setError('Vui lòng sử dụng email FPT hoàn thành !!!');
          //   }
          //
          setDataUser({ email, name });
          gotoStep(2);
        }
      })
      .catch((e) => {
        console.error(e);
        setError('Đã có lỗi xảy ra');
      });
    // gotoStep(2);
  };
  return (
    <div className="login-section-wrapper">
      <div className="login-section">
        <p>Vui lòng đăng nhập bằng email của bạn</p>
        <div className="google-login-box">
          <span className="google-logo">
            <img src={logo} alt="logo" />
          </span>
          <span className="signin-text" onClick={onClick}>Sign in</span>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
