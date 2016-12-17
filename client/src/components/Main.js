require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import * as ReactDOM from 'react-dom';
import {connect} from "react-redux"
import {Flex, Box} from 'reflexbox'
import MediaQuery from 'react-responsive';

import LayoutLargeScreenComponent from './LayoutLargeScreenComponent';
import LayoutMobileLandscapeComponent from './LayoutMobileLandscapeComponent';
import LayoutMobilePortraitComponent from './LayoutMobilePortraitComponent';

@connect((store) => {
  return {};
})
class AppComponent extends React.Component {
  state = {
    layout: [{
      x: 4,
      y: 0,
      w: 2,
      h: 2,
      i: '0',
      static: true
  }, {
      x: 4,
      y: 0,
      w: 2,
      h: 2,
      i: '1',
      static: false
  }
    ]
  };

  onLayoutChange = (layout) => {
    this.setState({layout: layout});
  };

  propTypes : {}

  defaultProps : {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="index">
        <MediaQuery
          minDeviceWidth={1224}
          values={{
          deviceWidth: 1600
        }}>
          <MediaQuery minDeviceWidth={1824}>
            <LayoutLargeScreenComponent
              onLayoutChange={this.onLayoutChange}
              initialLayout={this.state.layout}/>
          </MediaQuery>
        </MediaQuery>
        <MediaQuery maxWidth={1224}>
          <MediaQuery orientation='portrait'> 
            
          </MediaQuery>
          <MediaQuery orientation='landscape'>
            
          </MediaQuery>
        </MediaQuery>
      </div>
    );
  }
}

export default AppComponent;
