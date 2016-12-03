'use strict';

require('styles//TeamFavoritesPanel.css');

import React from 'react';
import { connect } from "react-redux"

@connect((store) => {
  return {
  };
})
class TeamFavoritesPanelComponent extends React.Component {
  propTypes: {

  }

  defaultProps: {

  }

  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div className="teamfavoritespanel-component">
      </div>
    );
  }
}

TeamFavoritesPanelComponent.displayName = 'TeamFavoritesPanelComponent';

export default TeamFavoritesPanelComponent;
