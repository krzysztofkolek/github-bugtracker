'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//TeamFavoriteWithGraphTile.css');

@connect((store) => {
  return {
  };
})
class TeamFavoriteWithGraphTileComponent extends React.Component {
  render() {
    return (
      <div className="teamfavoritewithgraphtile-component">
        Please edit src/components///TeamFavoriteWithGraphTileComponent.js to update this component!
      </div>
    );
  }
}

TeamFavoriteWithGraphTileComponent.displayName = 'TeamFavoriteWithGraphTileComponent';

// Uncomment properties you need
// TeamFavoriteWithGraphTileComponent.propTypes = {};
// TeamFavoriteWithGraphTileComponent.defaultProps = {};

export default TeamFavoriteWithGraphTileComponent;
