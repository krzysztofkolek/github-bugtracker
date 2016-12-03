'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//ContributorsList.css');

@connect((store) => {
  return {
  };
})
class ContributorsListComponent extends React.Component {
  propTypes: {

  }

  defaultProps: {

  }

  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div className="contributorslist-component">
      </div>
    );
  }
}

ContributorsListComponent.displayName = 'ContributorsListComponent';

export default ContributorsListComponent;
