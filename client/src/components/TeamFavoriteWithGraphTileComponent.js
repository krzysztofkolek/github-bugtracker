'use strict';

require('styles//TeamFavoriteWithGraphTile.css');

import React from 'react';
import { connect } from "react-redux"

@connect((store) => {
  return {
  };
})
class TeamFavoriteWithGraphTileComponent extends React.Component {
  propTypes: {

  }

  defaultProps: {

  }

  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div className="teamfavoritewithgraphtile-component">
      </div>
    );
  }
}

TeamFavoriteWithGraphTileComponent.displayName = 'TeamFavoriteWithGraphTileComponent';

export default TeamFavoriteWithGraphTileComponent;
