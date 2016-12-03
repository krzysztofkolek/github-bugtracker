'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//TeamFavoritesPanel.css');

@connect((store) => {
  return {
  };
})
class TeamFavoritesPanelComponent extends React.Component {
  render() {
    return (
      <div className="teamfavoritespanel-component">
        Please edit src/components///TeamFavoritesPanelComponent.js to update this component!
      </div>
    );
  }
}

TeamFavoritesPanelComponent.displayName = 'TeamFavoritesPanelComponent';

// Uncomment properties you need
// TeamFavoritesPanelComponent.propTypes = {};
// TeamFavoritesPanelComponent.defaultProps = {};

export default TeamFavoritesPanelComponent;
