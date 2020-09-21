import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GiTalk, GiTrophyCup, GiFairyWings } from 'react-icons/gi';
import './Timeline.css';
import './Star.css';
import { FaWpforms } from 'react-icons/fa';
import { AiTwotoneFire, AiOutlineArrowLeft } from 'react-icons/ai';
import { BsBoxArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Timeline() {
  return (
    <div className="timeline-wrapper">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div className="timeline-header">
        <div>Timeline</div>
      </div>
      <Link to="/"><BsBoxArrowLeft className="back-button" /></Link>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="21/09 - 24/10"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<FaWpforms />}
        >
          <div className="vertical-timeline-element-title">Signup form</div>
          <p>
            Form đăng ký đã được mở và sẽ kết thúc vào ngày chủ nhật (24/10). Bạn hãy nhấn
            {' '}
            <Link to="/signup" target="_blank" className="signup-link">vào đây</Link>
            {' '}
            để đăng ký.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="03/10"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiTalk />}
        >
          <div className="vertical-timeline-element-title">Offline</div>
          <p>
            Vào ngày thứ 7 (03/10), CLB B F-Code sẽ tổ chức buổi offline đầu tiên cho các bạn K16 trong khu quân sự. Qua đó, các bạn sẽ được hiểu thêm về CLB và các thắc mắc của các bạn sẽ được giải đáp. Các bạn hãy chú ý theo dõi trên fanpage của CLB nhé.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="01/11 - 08/11"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<AiTwotoneFire />}
        >
          <div className="vertical-timeline-element-title">Challenge 1</div>
          <p>
            Nội dung của thử thách sẽ được công bố vào buổi Offline kế tiếp (01/11). Các bạn k16 sẽ chính thức thực hiện thử thách. Các bạn hãy chú ý check mail nhé.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="01/11 - 07/12"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiFairyWings />}
        >
          <div className="vertical-timeline-element-title">Challenge 2</div>
          <p>
            Nội dung thử thách sẽ được công bố vào buổi Offline (01/11). Các bạn cần hoàn thành thử thách 1 mới có thể tham gia thử thách thứ 2. Đây là thử thách chính và cuối cùng trước khi các bạn trở thành thành viên chính thức của CLB.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="10/12"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiTrophyCup />}
        >
          <div className="vertical-timeline-element-title">Final</div>

          <p>
            Thời điểm mà thử thách thứ 2 để tham gia vào CLB đã kết thúc. Vào ngày 03/12, CLB sẽ công bố kết quả của đợt tuyển thành viên cũng như các giải thưởng mà các bạn đạt được.
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>

  );
}
export default Timeline;
