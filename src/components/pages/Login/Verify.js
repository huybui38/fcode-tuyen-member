/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import './Verify.css';
import { addUser } from '../../../firebase/user';
import SuccessConfirm from './SuccessConfirm';
import Loading from './Loading';

const VerifyForm = (props) => {
  const {
    data, gotoStep, setError, confirm,
  } = props;
  const { isConfirm, setIsConfirm } = confirm;
  if (!data) gotoStep(1);
  const {
    email, name, phoneNum, facebook,
  } = data;
  const onBack = () => {
    gotoStep(2);
  };
  const [isLoading, setLoading] = useState(false);
  const onConfirm = () => {
    setLoading(true);
    addUser(data, (err) => {
      setLoading(false);
      if (!err) return setIsConfirm(true);
      if (err == 'Already existed') return setError('Email này đã xác nhận!!');
      setError('Đã có lỗi xảy ra!!');
      console.error(err);
    });
  };

  return (
    <div className="verify-form-wrapper">

      {!isConfirm ? (
        <div className="verify-text">
          Bạn hãy xác nhận các thông tin đã điền
        </div>
      ) : <SuccessConfirm />}

      <div className="table-confirm noselect">
        <table>
          <tbody>
            <tr>
              <td>
                Email
              </td>
              <td>
                {email}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                Họ và tên
              </td>
              <td>
                {name}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                Số điện thoại
              </td>
              <td>
                {phoneNum}
              </td>

            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                Facebook
              </td>
              <td>
                {facebook}
              </td>

            </tr>
          </tbody>
        </table>
      </div>
      {isLoading ? <Loading /> : ''}
      {!isConfirm ? (
        <>
          {' '}
          <div className="verify-box" onClick={onBack}>
            <span className="verify-button">Quay lại</span>
          </div>
          <div className="verify-box" onClick={onConfirm}>
            <span className="verify-button">Xác nhận</span>
          </div>
        </>
      ) : ''}

    </div>
  );
};

export default VerifyForm;
