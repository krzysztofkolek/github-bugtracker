'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//Work.css');

@connect((store) => {
  return {
  };
})
class WorkComponent extends React.Component {
  render() {
    return (
      <div className="work-component">
        Please edit src/components///WorkComponent.js to update this component!
      </div>
    );
  }
}

WorkComponent.displayName = 'WorkComponent';

// Uncomment properties you need
// WorkComponent.propTypes = {};
// WorkComponent.defaultProps = {};

export default WorkComponent;
