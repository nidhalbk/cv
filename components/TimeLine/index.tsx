// import React from 'react';
// import AddIcon from '@material-ui/icons/Add';
// import SchoolIcon from '@material-ui/icons/School';
// import WorkIcon from '@material-ui/icons/Work';
// import Fab from '@material-ui/core/Fab';
// import StarIcon from '@material-ui/icons/Star';
// eslint-disable-next-line import/extensions
import dynamic from 'next/dynamic';

export default dynamic(() => import('./TimeLine'), { ssr: false });
