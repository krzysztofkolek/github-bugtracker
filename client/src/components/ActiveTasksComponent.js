'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//ActiveTasks.css');

@connect((store) => {
  return {
  };
})
class ActiveTasksComponent extends React.Component {
  propTypes: {

  }

  defaultProps: {

  }

  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div className="activetasks-component">
      </div>
    );
  }
}

ActiveTasksComponent.displayName = 'ActiveTasksComponent';

export default ActiveTasksComponent;
