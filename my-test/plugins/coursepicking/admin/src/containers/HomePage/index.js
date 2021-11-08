/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import CoursesPicking from '../../components/coursepicking';

const HomePage = () => {
  return (
       <CoursesPicking/>
  );
};

export default memo(HomePage);
