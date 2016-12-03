'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//TeamFavoriteTile.css');

@connect((store) => {
  return {
  };
})
class TeamFavoriteTileComponent extends React.Component {
  render() {
    return (
      <div className="teamfavoritetile-component">
        Please edit src/components///TeamFavoriteTileComponent.js to update this component!
      </div>
    );
  }
}

TeamFavoriteTileComponent.displayName = 'TeamFavoriteTileComponent';

// Uncomment properties you need
// TeamFavoriteTileComponent.propTypes = {};
// TeamFavoriteTileComponent.defaultProps = {};

export default TeamFavoriteTileComponent;
