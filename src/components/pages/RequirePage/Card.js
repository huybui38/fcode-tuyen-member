import React from 'react';
import './Card.css';
import { FaFire, FaHandshake } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiBookCover } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className="require__section">
        <div className="require__wrapper">
          <h1 className="require__heading">Tinh thần F-Code</h1>
          <div className="require__container">
            <div className="require__container-card">
              <div className="require__container-cardInfo">
                <div className="icon">
                  <FaFire />
                </div>
                <h3>Tiêu chí 1</h3>
                <p>Nhiệt huyết, cống hiến hết mình vì CLB</p>
              </div>
            </div>

            <div className="require__container-card">
              <div className="require__container-cardInfo">
                <div className="icon">
                  <GiBookCover />
                </div>
                <h3>Tiêu chí 2</h3>
                <p>Có tinh thần học hỏi, sẵn sàng chia sẻ kiến thức với mọi người</p>
              </div>
            </div>

            <div className="require__container-card">
              <div className="require__container-cardInfo">
                <div className="icon">
                  <FaHandshake />
                </div>
                <h3>Tiêu chí 3</h3>
                <p>Tôn trọng các anh chị khóa trên</p>
              </div>
            </div>

            <div className="require__container-card">
              <div className="require__container-cardInfo">
                <div className="icon">
                  <BsXDiamondFill />
                </div>
                <h3>Tiêu chí 4</h3>
                <p>Trách nhiệm, dám thử thách bản thân, kiên trì không dễ dàng bỏ cuộc.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
