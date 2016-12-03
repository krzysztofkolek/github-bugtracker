'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//BurndownChart.css');

@connect((store) => {
  return {
  };
})
class BurndownChartComponent extends React.Component {
  propTypes: {

  }

  defaultProps: {

  }

  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div className="burndownchart-component">
      </div>
    );
  }
}

BurndownChartComponent.displayName = 'BurndownChartComponent';

export default BurndownChartComponent;
