'use strict';

require('styles//Queries.css');

import React from 'react';
import { connect } from "react-redux"

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
