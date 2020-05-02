import React from 'react';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

export default [
  {
    props: {
      date: '2011 - present',
      className: 'vertical-timeline-element--work',
      contentStyle: {
        background: 'rgb(33, 150, 243)',
        color: '#fff',
      },
      contentArrowStyle: {
        borderRight: '7px solid  rgb(33, 150, 243)',
      },
      iconStyle: {
        color: '#fff',
        background: 'rgb(33, 150, 243)',
      },
      icon: <WorkIcon />,
    },
    title: 'Creative Director',
    subtitle: 'Miami, FL',
    content: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
  },
  {
    props: {
      date: '2010 - 2011',
      className: 'vertical-timeline-element--education',
      contentStyle: {
        background: 'rgb(233, 30, 99)',
        color: '#fff',
      },
      contentArrowStyle: {
        borderRight: '7px solid  rgb(233, 30, 99)',
      },
      iconStyle: {
        background: 'rgb(233, 30, 99)',
        color: '#fff',
      },
      icon: <SchoolIcon />,
    },
    title: 'Content Marketing for Web, Mobile and Social Media',
    subtitle: 'Online Course',
    content: 'Strategy, Social Media',
  },
  {
    props: {
      date: '2011 - present',
      className: 'vertical-timeline-element--work',
      contentStyle: {
        background: 'rgb(33, 150, 243)',
        color: '#fff',
      },
      contentArrowStyle: {
        borderRight: '7px solid  rgb(33, 150, 243)',
      },
      iconStyle: {
        background: 'rgb(33, 150, 243)',
        color: '#fff',
      },
      icon: <WorkIcon />,
    },
    title: 'Creative Director',
    subtitle: 'Miami, FL',
    content: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
  },
  {
    props: {
      date: '2010 - 2011',
      className: 'vertical-timeline-element--education',
      contentStyle: {
        background: 'rgb(233, 30, 99)',
        color: '#fff',
      },
      contentArrowStyle: {
        borderRight: '7px solid  rgb(233, 30, 99)',
      },
      iconStyle: {
        background: 'rgb(233, 30, 99)',
        color: '#fff',
      },
      icon: <SchoolIcon />,
    },
    title: 'Content Marketing for Web, Mobile and Social Media',
    subtitle: 'Online Course',
    content: 'Strategy, Social Media',
  },
];
