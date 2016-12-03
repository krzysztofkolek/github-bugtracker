'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//Queries.css');

@connect((store) => {
  return {
  };
})
class QueriesComponent extends React.Component {
  propTypes: {

  }

  defaultProps: {

  }

  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div className="queries-component">
      </div>
    );
  }
}

QueriesComponent.displayName = 'QueriesComponent';

export default QueriesComponent;
