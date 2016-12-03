'use strict';

require('styles//Home.css');

import React from 'react';
import { connect } from "react-redux"

@connect((store) => {
  return {
  };
})
class HomeComponent extends React.Component {
  propTypes: {

  }

  defaultProps: {

  }

  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div className="home-component">
      </div>
    );
  }
}

HomeComponent.displayName = 'HomeComponent';

export default HomeComponent;
