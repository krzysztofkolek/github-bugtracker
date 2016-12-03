'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//SharedQueries.css');

@connect((store) => {
  return {
  };
})
class SharedQueriesComponent extends React.Component {
  render() {
    return (
      <div className="sharedqueries-component">
        Please edit src/components///SharedQueriesComponent.js to update this component!
      </div>
    );
  }
}

SharedQueriesComponent.displayName = 'SharedQueriesComponent';

// Uncomment properties you need
// SharedQueriesComponent.propTypes = {};
// SharedQueriesComponent.defaultProps = {};

export default SharedQueriesComponent;
