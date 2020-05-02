import React, { useEffect, useState } from 'react';
import {
  VerticalTimelineElement,
  VerticalTimeline,
  // eslint-disable-next-line no-unused-vars
  VerticalTimelineElementProps,
} from 'react-vertical-timeline-component';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import data from './data';
import Wrapper from './wrapper';

interface element {
  props: VerticalTimelineElementProps;
  title: string;
  subtitle: string;
  content: string;
}

const VerticalLoadMore = () => {
  const [elements, setElements] = useState<element[]>([]);

  useEffect(() => {
    loadMore();
  }, []);

  const loadMore = () => {
    setElements([...elements, ...data]);
  };

  const addButton = () => (
    <Fab classes={{ root: 'fab-button' }} color="primary" aria-label="add">
      <AddIcon />
    </Fab>
  );

  const getTimelineElements = () => elements.map((ele) => (
      <VerticalTimelineElement {...ele.props}>
        <h3 className="vertical-timeline-element-title">{ele.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{ele.subtitle}</h4>
        <p>{ele.content}</p>
      </VerticalTimelineElement>
    ));

  return (
    <Wrapper>
      <VerticalTimeline>
        {getTimelineElements()}
        <VerticalTimelineElement iconOnClick={loadMore} icon={addButton()} />
      </VerticalTimeline>
    </Wrapper>
  );
};

export default VerticalLoadMore;
