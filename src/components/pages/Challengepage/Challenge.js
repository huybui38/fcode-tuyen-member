import React, { useState, useEffect } from 'react';
import './Challenge.css';
import { FaFire, FaHandshake } from 'react-icons/fa';
import { GiBookCover } from 'react-icons/gi';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { Progress } from 'antd';

function Challenge() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className="challenge__section">
        <div className="challenge__wrapper">
          <h1 className="challenge__heading">Thử thách</h1>
          <div className="challenge__container">
            <div className={click ? 'challenge__container-card active' : 'challenge__container-card'}>
              <div className={click ? 'challenge__container-cardInfo active' : 'challenge__container-cardInfo'}>
                <div className="icon">
                  <FaFire />
                </div>
                <h3>Giai đoạn 1</h3>
                <p>Đăng ký form</p>
                <Progress type="circle" percent={100} width={0} className="status-icon" />
                <div onClick={handleClick} className={click ? 'expanded' : 'collapsed'}>
                  {click ? 'less' : 'more'}
                  {click ? <AiOutlineArrowUp className="toggle-arrow" /> : <AiOutlineArrowDown className="toggle-arrow" />}
                </div>
              </div>
            </div>

            <div className="challenge__container-card">
              <div className="challenge__container-cardInfo">
                <div className="icon">
                  <GiBookCover />
                </div>
                <h3>Giai đoạn 2</h3>
                <p>Thử thách đầu tiên</p>
              </div>
            </div>

            <div className="challenge__container-card">
              <div className="challenge__container-cardInfo">
                <div className="icon">
                  <FaHandshake />
                </div>
                <h3>Giai đoạn 3</h3>
                <p>Thử thách thứ hai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Challenge;
