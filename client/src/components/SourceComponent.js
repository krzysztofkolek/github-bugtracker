'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//Source.css');

@connect((store) => {
  return {
  };
})
class SourceComponent extends React.Component {
  propTypes: {

  }

  defaultProps: {

  }

  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div className="source-component">
      </div>
    );
  }
}

SourceComponent.displayName = 'SourceComponent';

export default SourceComponent;
