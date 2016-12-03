'use strict';

import React from 'react';
import { connect } from "react-redux";

require('styles//ActiveBugs.css');

@connect((store) => {
  return {
  };
})
class ActiveBugsComponent extends React.Component {
  render() {
    return (
      <div className="activebugs-component">
        Please edit src/components///ActiveBugsComponent.js to update this component!
      </div>
    );
  }
}

ActiveBugsComponent.displayName = 'ActiveBugsComponent';

// Uncomment properties you need
// ActiveBugsComponent.propTypes = {};
// ActiveBugsComponent.defaultProps = {};

export default ActiveBugsComponent;
