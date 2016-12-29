'use strict';

require('styles//OverviewManagment.scss');

import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12
};

class OverviewManagmentComponent extends React.Component {
  render() {
    return (
      <div className="overviewmanagment-component">
        <div>
          <RaisedButton label="Product Backlog Items" secondary={true} disabled={false} style={style}/>
          <RaisedButton label="Task" secondary={true} disabled={false} style={style}/>
          <RaisedButton label="Bug" secondary={true} disabled={false} style={style}/>
        </div>
      </div>
    );
  }
}

OverviewManagmentComponent.displayName = 'OverviewManagmentComponent';

export default OverviewManagmentComponent;
