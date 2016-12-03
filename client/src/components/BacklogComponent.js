'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//Backlog.css');

@connect((store) => {
  return {
  };
})
class BacklogComponent extends React.Component {
  propTypes: {

  }

  defaultProps: {

  }

  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div className="backlog-component">
      </div>
    );
  }
}

BacklogComponent.displayName = 'BacklogComponent';

export default BacklogComponent;
