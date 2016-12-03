'use strict';

require('styles//ProjectList.css');

import React from 'react';
import { connect } from "react-redux"

@connect((store) => {
  return {
  };
})
class ProjectListComponent extends React.Component {
  propTypes: {

  }

  defaultProps: {

  }

  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div className="projectlist-component">
        Please edit src/components///ProjectListComponent.js to update this component!
      </div>
    );
  }
}

ProjectListComponent.displayName = 'ProjectListComponent';

// Uncomment properties you need
// ProjectListComponent.propTypes = {};
// ProjectListComponent.defaultProps = {};

export default ProjectListComponent;
