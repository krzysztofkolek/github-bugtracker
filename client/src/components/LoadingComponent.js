'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//Loading.css');

@connect((store) => {
  return {
  };
})
class LoadingComponent extends React.Component {
  propTypes: {

  }

  defaultProps: {

  }

  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div className="loading-component">
      </div>
    );
  }
}

LoadingComponent.displayName = 'LoadingComponent';

export default LoadingComponent;
