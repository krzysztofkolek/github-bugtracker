'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//Build.css');

@connect((store) => {
  return {
  };
})
class BuildComponent extends React.Component {
  render() {
    return (
      <div className="build-component">
        Please edit src/components///BuildComponent.js to update this component!
      </div>
    );
  }
}

BuildComponent.displayName = 'BuildComponent';

// Uncomment properties you need
// BuildComponent.propTypes = {};
// BuildComponent.defaultProps = {};

export default BuildComponent;
