'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//Build.css');

@connect((store) => {
  return {
  };
})
class BuildComponent extends React.Component {
  propTypes: {

  }

  defaultProps: {

  }

  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div className="build-component">
      </div>
    );
  }
}

BuildComponent.displayName = 'BuildComponent';

export default BuildComponent;
