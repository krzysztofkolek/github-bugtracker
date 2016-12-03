'use strict';

require('styles//BugTriage.css');

import React from 'react';
import { connect } from "react-redux"

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
