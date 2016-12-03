'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//Work.css');

@connect((store) => {
  return {
  };
})
class WorkComponent extends React.Component {
  propTypes: {

  }

  defaultProps: {

  }

  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div className="work-component">
      </div>
    );
  }
}

WorkComponent.displayName = 'WorkComponent';

export default WorkComponent;
