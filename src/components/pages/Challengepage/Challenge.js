import React, { useState, useEffect } from 'react';
import './Challenge.css';
import { GiWeightLiftingUp, GiFlyingFlag } from 'react-icons/gi';
import { AiOutlineCheckCircle, AiOutlineFileSearch } from 'react-icons/ai';
import { RiArrowDropDownFill, RiArrowDropUpFill } from 'react-icons/ri';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
// import {
//   CollapsibleComponent,
//   CollapsibleHead,
//   CollapsibleContent,
// } from 'react-collapsible-component';
import Collapsible from 'react-collapsible';
import Button from './ButtonC';

function Challenge() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (

    <div className="challenge__section">
      <div className="challenge__wrapper">
        <h1 className="challenge__heading">Giai đoạn tuyển chọn</h1>
        <div className="challenge__container">
          <div className={click ? 'challenge__container-card active' : 'challenge__container-card'}>
            <div className="challenge__container-cardInfo">
              <div className="challenge-card-header header1">
                <AiOutlineFileSearch className="challenge-icon" />
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

              <Collapsible trigger={click ? <RiArrowDropUpFill className="toggle-arrow toggle-up" onClick={handleClick} /> : <RiArrowDropDownFill className="toggle-arrow toggle-down" onClick={handleClick} />}>
                <p className="expanded-text">Bạn nào chưa đăng ký tham gia thì hãy ấn ngay nút "Đăng ký" bên dưới ngay nhé! </p>
                <Button
                  buttonStyle="btn--primary"
                  buttonSize="btn--mobile"
                  buttonColor="red"
                >
                  ĐĂNG KÝ
                </Button>
              </Collapsible>
            </div>
          </div>

          <div className="challenge__container-card">
            <div className="challenge__container-cardInfo">
              <div className="challenge-card-header header2">
                <GiWeightLiftingUp className="challenge-icon" />
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
              <Collapsible trigger={click ? <RiArrowDropUpFill className="toggle-arrow toggle-up" onClick={handleClick} /> : <RiArrowDropDownFill className="toggle-arrow toggle-down" onClick={handleClick} />}>
                <p className="expanded-text">Thử thách sẽ được bật mí vào ngày 20/09 </p>
              </Collapsible>
            </div>
          </div>

          <div className="challenge__container-card">
            <div className="challenge__container-cardInfo">
              <div className="challenge-card-header header3">
                <GiFlyingFlag className="challenge-icon" />
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
              <Collapsible trigger={click ? <RiArrowDropUpFill className="toggle-arrow toggle-up" onClick={handleClick} /> : <RiArrowDropDownFill className="toggle-arrow toggle-down" onClick={handleClick} />}>
                <p className="expanded-text">Thử thách sẽ được bật mí vào ngày 20/09 </p>
              </Collapsible>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

export default Challenge;
