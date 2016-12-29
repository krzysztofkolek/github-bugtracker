'use strict';

require('styles//BurndownChart.css');

import React from 'react';
import { connect } from "react-redux"

import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'Recharts';

const data = [
      {name: '12-12-2016', uv: 4000, pv: 2400, amt: 2400},
      {name: '13-12-2016', uv: 3000, pv: 1398, amt: 2210},
      {name: '14-12-2016', uv: 2000, pv: 9800, amt: 2290},
      {name: '15-12-2016', uv: 2780, pv: 3908, amt: 2000},
      {name: '16-12-2016', uv: 1890, pv: 4800, amt: 2181},
      {name: '17-12-2016', uv: 2390, pv: 3800, amt: 2500},
      {name: '18-12-2016', uv: 3490, pv: 4300, amt: 2100},
];

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
        <div>
          Burndown
        </div>
        <AreaChart width={400} height={120} data={data} >
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
        </AreaChart>
      </div>
    );
  }
}

BurndownChartComponent.displayName = 'BurndownChartComponent';

export default BurndownChartComponent;
