'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//CurrentIteration.css');

@connect((store) => {
  return {
  };
})
class CurrentIterationComponent extends React.Component {
  render() {
    return (
      <div className="currentiteration-component">
        Please edit src/components///CurrentIterationComponent.js to update this component!
      </div>
    );
  }
}

CurrentIterationComponent.displayName = 'CurrentIterationComponent';

// Uncomment properties you need
// CurrentIterationComponent.propTypes = {};
// CurrentIterationComponent.defaultProps = {};

export default CurrentIterationComponent;
