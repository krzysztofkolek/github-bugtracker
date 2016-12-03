'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//SprintInformationPanel.css');

@connect((store) => {
  return {
  };
})
class SprintInformationPanelComponent extends React.Component {
  render() {
    return (
      <div className="sprintinformationpanel-component">
        Please edit src/components///SprintInformationPanelComponent.js to update this component!
      </div>
    );
  }
}

SprintInformationPanelComponent.displayName = 'SprintInformationPanelComponent';

// Uncomment properties you need
// SprintInformationPanelComponent.propTypes = {};
// SprintInformationPanelComponent.defaultProps = {};

export default SprintInformationPanelComponent;
