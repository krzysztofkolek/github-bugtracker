'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//SharedQueries.css');

@connect((store) => {
  return {
  };
})
class SharedQueriesComponent extends React.Component {
  propTypes: {

  }

  defaultProps: {

  }

  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div className="sharedqueries-component">
      </div>
    );
  }
}

SharedQueriesComponent.displayName = 'SharedQueriesComponent';

export default SharedQueriesComponent;
