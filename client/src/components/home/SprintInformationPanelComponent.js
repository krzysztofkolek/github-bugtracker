'use strict';

require('styles//SprintInformationPanel.scss');

import React from 'react';
import { connect } from "react-redux"

import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'Recharts';

const data = [
      {name: 'Page A', uv: 10, pv: 0, amt: 0} 
];


@connect((store) => {
  return {
  };
})
class SprintInformationPanelComponent extends React.Component {
  propTypes: {

  }

  defaultProps: {

  }

  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div className="sprintinformationpanel-component">
        <div>
            <div>
              Sprint 3  
            </div>
            <div>
              May 07 - May 18
            </div>
            <div>
              <div>
                  <div>
                    39
                  </div>
                  <div>
                    <div></div>
                  </div>
              </div>
              <div>
                  of 42 h
              </div>
            </div>
            <div>
              Backlog items: 3 in progress
            </div>
        </div>
      </div>
    );
  }
}

SprintInformationPanelComponent.displayName = 'SprintInformationPanelComponent';

export default SprintInformationPanelComponent;
