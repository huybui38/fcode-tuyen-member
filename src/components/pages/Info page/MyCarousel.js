/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component, useState } from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Picture1 from './activities-images/activity-1.jpg';
import Picture2 from './activities-images/activity-2.jpg';
import Picture3 from './activities-images/activity-3.jpg';
import Picture4 from './activities-images/activity-4.jpg';
import Picture5 from './activities-images/activity-5.jpg';
import Picture6 from './activities-images/activity-6.jpg';
import Picture7 from './activities-images/activity-7.jpg';
import './MyCarousel.css';
import OutsideHandle from './Outside';

function MyCarousel() {
  const [isShow, setIsShow] = useState(false);
  const [targetImg, setTarget] = useState('');
  const handleClick = (e) => {
    setIsShow(true);
    setTarget(e.currentTarget.src);
    // console.log(e.currentTarget.src);
  };
  const onClose = () => {
    setIsShow(false);
    // console.log(e.currentTarget.src);
  };
  return (
    <div className="carousel-wrapper" id="carousel-section">
      <div className="content-wrapper">
        <div className="text-paragraph">
          <div className="text-paragraph-header">CLB F-CODE</div>
          <p className="text-paragraph-body">
            F-Code được thành lập vào năm 2014, là CLB học thuật đầu tiên tại trường đại học FPT HCM. Với mục tiêu ban đầu là tạo ra một nơi để các bạn sinh viên ngành kĩ thuật phần mềm có đam mê về lập trình được thỏa sức trao đổi và học tập với nhau. Sau hơn 5 năm hoạt động, CLB đã tạo được nhiều sân chơi cho các bạn sinh viên trường ĐH FPT.
            <span className="visit-link">
              <Link to="//fcodehcm.wordpress.com" target="_blank">Xem thêm</Link>
              <span className="link-arrow"><FaArrowRight /></span>
            </span>
          </p>
        </div>
      </div>

      <div className="image-wrapper">
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },

          ]}
          dots
          showSides={false}
          sidesOpacity={0.5}
          sideSize={0.1}
          slidesToScroll={3}
          slidesToShow={3}
          scrollOnDevice
          swipe
          responsive
          className="carousel"
        >

          <div>
            <img
              onClick={handleClick}
              alt=""
              src={Picture1}
            />
          </div>
          <div>
            <img
              onClick={handleClick}
              alt=""
              src={Picture2}
            />
          </div>
          <div>
            <img
              onClick={handleClick}
              alt=""
              src={Picture3}
            />
          </div>

          <div>
            <img
              onClick={handleClick}
              alt=""
              src={Picture4}
            />
          </div>
          <div>
            <img
              onClick={handleClick}
              alt=""
              src={Picture5}
            />
          </div>
          <div>
            <img
              onClick={handleClick}
              alt=""
              src={Picture6}
            />
          </div>
          <div>
            <img
              onClick={handleClick}
              alt=""
              src={Picture7}
            />
          </div>

        </InfiniteCarousel>

      </div>
      <div id="myModal" className="modal" style={{ display: isShow ? 'block' : 'none', zIndex: 99 }}>
        <span className="close" onClick={onClose}>&times;</span>
        <div>
          {isShow ? (
            <OutsideHandle callback={onClose}>
              <img
                className="modal-content"
                alt=""
                src={targetImg}
              />
            </OutsideHandle>
          ) : (
            <img
              className="modal-content"
              alt=""
              src={targetImg}
            />
          )}
        </div>

      </div>
    </div>

  );
}

export default MyCarousel;
