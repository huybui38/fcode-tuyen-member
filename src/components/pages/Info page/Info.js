import React from 'react';
import MyCarousel from './MyCarousel';
import './Info.css';

function Info() {
  return (
    <div className="info-page-wrapper">
      <div className="content-wrapper">
        {/* <div className="text-paragraph">
          <div className="text-paragraph-header">CLB F-CODE</div>
          <p className="text-paragraph-body">F-Code được thành lập vào năm 2014, là CLB học thuật đầu tiên tại trường đại học FPT HCM. Với mục tiêu ban đầu là tạo ra một nơi để các bạn sinh viên ngành kĩ thuật phần mềm, an toàn thông tin có đam mê về lập trình được thỏa sức trao đổi và học tập với nhau. Sau hơn 5 năm hoạt động, CLB đã tạo được nhiều sân chơi cho các bạn sinh viên trường ĐH FPT.</p>
        </div> */}
        <di className="carousel">
          <MyCarousel />
        </di>
      </div>
    </div>
  );
}

export default Info;
