'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//Backlog.css');

@connect((store) => {
  return {
  };
})
class BacklogComponent extends React.Component {
  render() {
    return (
      <div className="backlog-component">
        Please edit src/components///BacklogComponent.js to update this component!
      </div>
    );
  }
}

BacklogComponent.displayName = 'BacklogComponent';

// Uncomment properties you need
// BacklogComponent.propTypes = {};
// BacklogComponent.defaultProps = {};

export default BacklogComponent;
