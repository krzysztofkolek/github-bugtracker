'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//BurndownChart.css');

@connect((store) => {
  return {
  };
})
class BurndownChartComponent extends React.Component {
  render() {
    return (
      <div className="burndownchart-component">
        Please edit src/components///BurndownChartComponent.js to update this component!
      </div>
    );
  }
}

BurndownChartComponent.displayName = 'BurndownChartComponent';

// Uncomment properties you need
// BurndownChartComponent.propTypes = {};
// BurndownChartComponent.defaultProps = {};

export default BurndownChartComponent;
