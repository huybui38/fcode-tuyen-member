import React, { useState, useEffect } from 'react';
import './Challenge.css';
import { FaFire, FaHandshake } from 'react-icons/fa';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { RiArrowDropDownFill, RiArrowDropUpFill } from 'react-icons/ri';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

function Challenge() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (

    <div className="challenge__section">
      <div className="challenge__wrapper">
        <h1 className="challenge__heading">Giai đoạn tuyển chọn</h1>
        <div className="challenge__container">
          <div className={click ? 'challenge__container-card active' : 'challenge__container-card'}>
            <div className={click ? 'challenge__container-cardInfo active' : 'challenge__container-cardInfo'}>
              <div className="challenge-card-header">
                <FaFire className="challenge-icon" />
                <h3>Giai đoạn 1</h3>
              </div>
              <div className="cardInfo-detail">
                <p>Đăng ký form</p>
                <div className="time">
                  <span className="time-heading">Thời gian: </span>
                  <span className="time-number">20/09 - 28/09</span>
                </div>
                <div className="progress-status">
                  <AiOutlineCheckCircle className="progress-status-icon" />
                  <span className="progress-status-text">Đang mở</span>
                </div>
              </div>

              {click ? <RiArrowDropUpFill className="toggle-arrow" onClick={handleClick} /> : <RiArrowDropDownFill className="toggle-arrow" onClick={handleClick} />}
            </div>
          </div>

          <div className="challenge__container-card">
            <div className="challenge__container-cardInfo">
              <div className="challenge-card-header">
                <FaFire className="challenge-icon" />
                <h3>Giai đoạn 2</h3>
              </div>
              <div className="cardInfo-detail">
                <p>Thử thách thứ nhất</p>
                <div className="time">
                  <span className="time-heading">Thời gian: </span>
                  <span className="time-number">29/09 - 07/10</span>
                </div>
                <div className="progress-status">
                  <LoadingOutlined style={{ fontSize: 20, color: 'blue' }} spin className="progress-waiting-icon" />
                  <span className="progress-status-text">Đang chờ</span>
                </div>
              </div>
              <RiArrowDropDownFill className="toggle-arrow invalid-toggle" />
            </div>
          </div>

          <div className="challenge__container-card">
            <div className="challenge__container-cardInfo">
              <div className="challenge-card-header">
                <FaFire className="challenge-icon" />
                <h3>Giai đoạn 3</h3>
              </div>
              <div className="cardInfo-detail">
                <p>Thử thách thứ hai</p>
                <div className="time">
                  <span className="time-heading">Thời gian: </span>
                  <span className="time-number">29/09 - 07/10</span>
                </div>
                <div className="progress-status">
                  <LoadingOutlined style={{ fontSize: 20, color: 'blue' }} spin className="progress-waiting-icon" />
                  <span className="progress-status-text">Đang chờ</span>
                </div>
              </div>
              <RiArrowDropDownFill className="toggle-arrow invalid-toggle" />
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

export default Challenge;
