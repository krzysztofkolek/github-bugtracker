'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//Loading.css');

@connect((store) => {
  return {
  };
})
class LoadingComponent extends React.Component {
  render() {
    return (
      <div className="loading-component">
        Please edit src/components///LoadingComponent.js to update this component!
      </div>
    );
  }
}

LoadingComponent.displayName = 'LoadingComponent';

// Uncomment properties you need
// LoadingComponent.propTypes = {};
// LoadingComponent.defaultProps = {};

export default LoadingComponent;
