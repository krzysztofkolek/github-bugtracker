'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//ActiveTasks.css');

@connect((store) => {
  return {
  };
})
class ActiveTasksComponent extends React.Component {
  render() {
    return (
      <div className="activetasks-component">
        Please edit src/components///ActiveTasksComponent.js to update this component!
      </div>
    );
  }
}

ActiveTasksComponent.displayName = 'ActiveTasksComponent';

// Uncomment properties you need
// ActiveTasksComponent.propTypes = {};
// ActiveTasksComponent.defaultProps = {};

export default ActiveTasksComponent;
