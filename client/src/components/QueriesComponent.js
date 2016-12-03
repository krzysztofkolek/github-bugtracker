'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//Queries.css');

@connect((store) => {
  return {
  };
})
class QueriesComponent extends React.Component {
  render() {
    return (
      <div className="queries-component">
        Please edit src/components///QueriesComponent.js to update this component!
      </div>
    );
  }
}

QueriesComponent.displayName = 'QueriesComponent';

// Uncomment properties you need
// QueriesComponent.propTypes = {};
// QueriesComponent.defaultProps = {};

export default QueriesComponent;
