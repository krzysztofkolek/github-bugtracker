'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//ErrorOccureed.css');

@connect((store) => {
  return {
  };
})
class ErrorOccureedComponent extends React.Component {
  render() {
    return (
      <div className="erroroccureed-component">
        Please edit src/components///ErrorOccureedComponent.js to update this component!
      </div>
    );
  }
}

ErrorOccureedComponent.displayName = 'ErrorOccureedComponent';

// Uncomment properties you need
// ErrorOccureedComponent.propTypes = {};
// ErrorOccureedComponent.defaultProps = {};

export default ErrorOccureedComponent;
