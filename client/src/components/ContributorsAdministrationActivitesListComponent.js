'use strict';

import React from 'react';
import { connect } from "react-redux"

require('styles//ContributorsAdministrationActivitesList.css');

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
