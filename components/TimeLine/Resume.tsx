import React from 'react';
import { VerticalTimelineElement, VerticalTimeline } from 'react-vertical-timeline-component';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';
import Wrapper from './wrapper';

const timelineElements = [
  <VerticalTimelineElement
    // @ts-ignore
    // onTimelineElementClick={() => {
    //   alert('onTimelineElementClick event fired');
    // }}
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="07/2018 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">
      Technical Project Manager | Team Lead | Scrum master
    </h3>
    <p>Oyez, Charguia2 (Tunisia)</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="09/2016–06/2018"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Technical director | web department manager</h3>
    <p>ISP, Ezzahra (Tunisia)</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="02/2013–08/2016"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">
      Web Developer | JEE Tester (Liferay) | Scala designer
    </h3>
    <p>NetCenter, bardo (Tunisia)</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
    date="09/2007-07/2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">
      Fundamental license in computer science and multimedia
    </h3>
    <p>Higher Institute of Multimedia Arts, Manouba (Tunisia)</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="09/2001–06/2007"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor Math section</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>Secondary school March 2, Sousse (Tunisia)</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarIcon />}
  />,
];

export default () => (
  <Wrapper>
    <VerticalTimeline>{timelineElements}</VerticalTimeline>
  </Wrapper>
);
