'use strict';

import React from 'react';
import { connect } from "react-redux";

require('styles//ActiveBugs.css');

@connect((store) => {
  return {
  };
})
class ActiveBugsComponent extends React.Component {
  propTypes: {

  }

  defaultProps: {

  }

  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div className="activebugs-component">
      </div>
    );
  }
}

ActiveBugsComponent.displayName = 'ActiveBugsComponent';

export default ActiveBugsComponent;
