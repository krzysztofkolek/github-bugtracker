'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//TeamFavoriteTile.css');

@connect((store) => {
  return {
  };
})
class TeamFavoriteTileComponent extends React.Component {
  propTypes: {

  }

  defaultProps: {

  }

  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div className="teamfavoritetile-component">
      </div>
    );
  }
}

TeamFavoriteTileComponent.displayName = 'TeamFavoriteTileComponent';

export default TeamFavoriteTileComponent;
