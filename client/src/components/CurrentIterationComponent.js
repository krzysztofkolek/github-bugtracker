'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//CurrentIteration.css');

@connect((store) => {
  return {
  };
})
class CurrentIterationComponent extends React.Component {
  propTypes: {

  }

  defaultProps: {

  }

  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div className="currentiteration-component">
      </div>
    );
  }
}

CurrentIterationComponent.displayName = 'CurrentIterationComponent';

export default CurrentIterationComponent;
