'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//Home.css');

@connect((store) => {
  return {
  };
})
class HomeComponent extends React.Component {
  render() {
    return (
      <div className="home-component">
        Please edit src/components///HomeComponent.js to update this component!
      </div>
    );
  }
}

HomeComponent.displayName = 'HomeComponent';

// Uncomment properties you need
// HomeComponent.propTypes = {};
// HomeComponent.defaultProps = {};

export default HomeComponent;
