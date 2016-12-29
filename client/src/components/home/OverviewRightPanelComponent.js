'use strict';

require('styles//OverviewRightPanel.scss');

import React from 'react';

import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List'; 


import Avatar from 'material-ui/Avatar'; 
import Subheader from 'material-ui/Subheader'; 
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class OverviewRightPanelComponent extends React.Component {  
  render() {
    var Activities = ([
      {displayName: 'View backlog', url: ''},
      {displayName: 'View board', url: ''},
      {displayName: 'View work items', url: ''},
      {displayName: 'Request feedback', url: ''},
      {displayName: 'Go to project portal ', url: ''},
      {displayName: 'View process guidance', url: ''},
      {displayName: 'View reports', url: ''},
    ]).map((activitie)=>{
      return <li key={activitie.id}>
      {activitie.displayName}
      </li>
    });
    var Members = ([
      {image: '../../images/final.png', fullName: 'tomas d', githubLogin: ''}
    ]).map((member)=>{
      return <li key={member.id}>
        <Avatar src={member.image} />
        <a href={`https://github.com/${member.githubLogin}`}>{member.fullName}</a>
      </li>
    });
    var Administration = ([
      {displayName: 'Configure schedule and iterations', url: ''},
      {displayName: 'Configure work areas', url: ''},
    ]).map((administration)=>{
      return <li key={administration.id}>
      <a href="">{administration.displayName}</a>
      </li>
    });

    return (
      <div className="overviewrightpanel-component">
      
      <p>Activities</p>
        <ul>        
          {Activities}
        </ul>
      <p>Members</p>
        <ul>      
          {Members}  
        </ul>    
      <a href="">Manage all members</a>

      <p>Administration</p>
        <ul> 
          {Administration}
        </ul>            
      </div>
    );
  }
}

OverviewRightPanelComponent.displayName = 'OverviewRightPanelComponent';

// Uncomment properties you need
// OverviewRightPanelComponent.propTypes = {};
// OverviewRightPanelComponent.defaultProps = {};

export default OverviewRightPanelComponent;
