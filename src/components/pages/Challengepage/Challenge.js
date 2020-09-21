import React, { useState, useEffect } from 'react';
import './Challenge.css';
import { GiWeightLiftingUp, GiFlyingFlag } from 'react-icons/gi';
import { AiOutlineCheckCircle, AiOutlineFileSearch } from 'react-icons/ai';
import { RiArrowDropDownFill, RiArrowDropUpFill } from 'react-icons/ri';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import Collapsible from 'react-collapsible';
import Button from './ButtonC';

function Challenge() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [click1, setClick1] = useState(false);
  const handleClick1 = () => setClick1(!click1);

  const [click2, setClick2] = useState(false);
  const handleClick2 = () => setClick2(!click2);

  const closeChallenge1 = () => setClick(false);
  const closeChallenge2 = () => setClick1(false);
  const closeChallenge3 = () => setClick2(false);

  console.log('click=', click);
  console.log('click1=', click1);

  return (
    <div className="challenge__section">
      <div className="challenge__wrapper">
        <h1 className="challenge__heading">Giai đoạn tuyển chọn</h1>
        <div className="challenge__container">
          <div className="challenge__container-card">
            <div className="challenge__container-cardInfo">
              <div className="challenge-card-header header1">
                <AiOutlineFileSearch className="challenge-icon" />
                <h3>Giai đoạn 1</h3>
              </div>
              <div className="cardInfo-detail">
                <p>Đăng ký form</p>
                <div className="time">
                  <span className="time-heading">Thời gian: </span>
                  <span className="time-number">21/09 - 24/10</span>
                </div>
                <div className="progress-status">
                  <AiOutlineCheckCircle className="progress-status-icon" />
                  <span className="progress-status-text">Đang mở</span>
                </div>
              </div>

              <Collapsible open={click} trigger={click ? <RiArrowDropUpFill className="toggle-arrow toggle-up" onClick={handleClick} /> : <RiArrowDropDownFill className="toggle-arrow toggle-down" onClick={() => { handleClick(); closeChallenge2(); closeChallenge3(); }} />}>
                <div className={click ? 'able-info' : 'unable-info'}>
                  <p className="expanded-text">Bạn nào chưa đăng ký tham gia thì hãy ấn ngay nút "Đăng ký" bên dưới ngay nhé! </p>
                  <Link to="/signup">
                    <Button
                      buttonStyle="btn--primary"
                      buttonSize="btn--mobile"
                      buttonColor="red"
                    >
                      ĐĂNG KÝ
                    </Button>

                  </Link>
                </div>

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
                  <span className="time-number">01/11 - 15/11</span>
                </div>
                <div className="progress-status">
                  <LoadingOutlined style={{ fontSize: 20, color: 'blue' }} spin className="progress-waiting-icon" />
                  <span className="progress-status-text">Đang đóng</span>
                </div>
              </div>
              <Collapsible open={click1} trigger={click1 ? <RiArrowDropUpFill className="toggle-arrow toggle-up" onClick={handleClick1} /> : <RiArrowDropDownFill className="toggle-arrow toggle-down" onClick={() => { handleClick1(); closeChallenge1(); closeChallenge3(); }} />}>
                <div className={click1 ? 'able-info' : 'unable-info'}>
                  <p className="expanded-text">Thử thách sẽ được bật mí vào ngày 01/11 </p>
                </div>
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
                  <span className="time-number">01/11 - 07/12</span>
                </div>
                <div className="progress-status">
                  <LoadingOutlined style={{ fontSize: 20, color: 'blue' }} spin className="progress-waiting-icon" />
                  <span className="progress-status-text">Đang đóng</span>
                </div>
              </div>
              <Collapsible open={click2} trigger={click2 ? <RiArrowDropUpFill className="toggle-arrow toggle-up" onClick={handleClick2} /> : <RiArrowDropDownFill className="toggle-arrow toggle-down" onClick={() => { handleClick2(); closeChallenge1(); closeChallenge2(); }} />}>
                <p className="expanded-text">Thử thách sẽ được bật mí vào ngày 01/11 </p>
              </Collapsible>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

export default Challenge;
