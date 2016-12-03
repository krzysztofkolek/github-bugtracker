'use strict';

require('styles//ContributorsAdministrationActivitesList.css');

import React from 'react';
import { connect } from "react-redux"

@connect((store) => {
  return {
  };
})
class ContributorsAdministrationActivitesListComponent extends React.Component {
  propTypes: {

  }

  defaultProps: {

  }

  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <div className="contributorsadministrationactiviteslist-component">
      </div>
    );
  }
}

ContributorsAdministrationActivitesListComponent.displayName = 'ContributorsAdministrationActivitesListComponent';

export default ContributorsAdministrationActivitesListComponent;
