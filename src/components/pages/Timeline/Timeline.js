import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GiBookCover } from 'react-icons/gi';
import './Timeline.css';
import './Star.css';

function Timeline() {
  return (
    <div className="timeline-wrapper">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div className="timeline-header">
        <h1>Timeline</h1>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="20/09 - 15/09"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiBookCover />}
        >
          <h2 className="vertical-timeline-element-title">Mở form đăng ký</h2>
          <p>
            Form đăng ký đã được mở và sẽ kết thúc vào ngày chủ nhật (27/09). Bạn hãy nhấn vào đây để đăng ký
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="17/10"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiBookCover />}
        >
          <h2 className="vertical-timeline-element-title">Offline với CLB</h2>
          <p>
            Vào ngày thứ 7 (17/10), CLB B F-Code sẽ tổ chức buổi offline đầu tiên cho các bạn K16. Qua đó, các bạn sẽ được CLB công bố các thử thách và chính thức thực hiện. Các bạn hãy chú ý check mail nhé.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiBookCover />}
        >
          <h3 className="vertical-timeline-element-title">Thử thách 1</h3>
          <p>
            Nội dung của thử thách sẽ được công bố vào ngày Offline 03/11. Để có thể tham gia thử thách tiếp theo cũng như để trở thành thành viên CLB thì các bạn phải vượt qua thử thách này.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiBookCover />}
        >
          <h3 className="vertical-timeline-element-title">Thử thách 2</h3>
          <p>
            Nội dung thử thách sẽ được công bố vào buổi offline. Đây là thử thách chính và cuối cùng trước khi các bạn trở thành thành viên chính thức của CLB.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<GiBookCover />}
        >
          <h3 className="vertical-timeline-element-title">Công bố kết quả</h3>

          <p>
            Thời điểm mà thử thách thứ 2 để tham gia vào CLB đã kết thúc. Vào ngày 03/12, CLB sẽ công bố kết quả của đợt tuyển thành viên cũng như các giải thưởng mà các bạn đạt được.
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>

  );
}
export default Timeline;
