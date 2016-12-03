'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//BugTriage.css');

@connect((store) => {
  return {
  };
})
class BugTriageComponent extends React.Component {
  propTypes: {

  }

  defaultProps: {

  }

  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div className="bugtriage-component">
      </div>
    );
  }
}

BugTriageComponent.displayName = 'BugTriageComponent';

export default BugTriageComponent;
