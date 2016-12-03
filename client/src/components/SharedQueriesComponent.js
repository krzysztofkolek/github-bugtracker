'use strict';

require('styles//SharedQueries.css');

import React from 'react';
import { connect } from "react-redux"

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
