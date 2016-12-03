require('normalize.css/normalize.css');
require('styles/App.css');

let yeomanImage = require('../images/yeoman.png');

import React from 'react';
import { connect } from "react-redux"

@connect((store) => {
  return {
  };
})
class AppComponent extends React.Component {
  propTypes: {

  }

  defaultProps: {

  }

  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
} 

export default AppComponent;
