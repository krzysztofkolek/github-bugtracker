'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//ContributorsList.css');

@connect((store) => {
  return {
  };
})
class ContributorsListComponent extends React.Component {
  render() {
    return (
      <div className="contributorslist-component">
        Please edit src/components///ContributorsListComponent.js to update this component!
      </div>
    );
  }
}

ContributorsListComponent.displayName = 'ContributorsListComponent';

// Uncomment properties you need
// ContributorsListComponent.propTypes = {};
// ContributorsListComponent.defaultProps = {};

export default ContributorsListComponent;
