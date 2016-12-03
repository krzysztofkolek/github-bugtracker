'use strict';

require('styles//ActiveBugs.css');

import React from 'react';
import { connect } from "react-redux";

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
