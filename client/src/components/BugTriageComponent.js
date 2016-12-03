'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//BugTriage.css');

@connect((store) => {
  return {
  };
})
class BugTriageComponent extends React.Component {
  render() {
    return (
      <div className="bugtriage-component">
        Please edit src/components///BugTriageComponent.js to update this component!
      </div>
    );
  }
}

BugTriageComponent.displayName = 'BugTriageComponent';

// Uncomment properties you need
// BugTriageComponent.propTypes = {};
// BugTriageComponent.defaultProps = {};

export default BugTriageComponent;
