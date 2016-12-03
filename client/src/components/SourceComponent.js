'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//Source.css');

@connect((store) => {
  return {
  };
})
class SourceComponent extends React.Component {
  render() {
    return (
      <div className="source-component">
        Please edit src/components///SourceComponent.js to update this component!
      </div>
    );
  }
}

SourceComponent.displayName = 'SourceComponent';

// Uncomment properties you need
// SourceComponent.propTypes = {};
// SourceComponent.defaultProps = {};

export default SourceComponent;
