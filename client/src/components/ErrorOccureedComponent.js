'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//ErrorOccureed.css');

@connect((store) => {
  return {
  };
})
class ErrorOccureedComponent extends React.Component {
  propTypes: {

  }

  defaultProps: {

  }

  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div className="erroroccureed-component">
      </div>
    );
  }
}

ErrorOccureedComponent.displayName = 'ErrorOccureedComponent';

export default ErrorOccureedComponent;
