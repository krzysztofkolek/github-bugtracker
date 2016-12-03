'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//SprintInformationPanel.css');

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
      </div>
    );
  }
}

SprintInformationPanelComponent.displayName = 'SprintInformationPanelComponent';

export default SprintInformationPanelComponent;
