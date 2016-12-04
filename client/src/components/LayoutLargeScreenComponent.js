'use strict';

require('styles//LayoutLargeScreen.css');

import React from 'react';
import {connect} from "react-redux"
 
import AppBar from 'material-ui/AppBar';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Settings from 'material-ui/svg-icons/action/settings';
import Paper from 'material-ui/Paper';

const style = {
  height: 80,
  width: 'auto',
  margin: 20,
  textAlign: 'center',
  display: '-webkit-box',
  margin: 0,
};

@connect((store) => {
  return {};
})
class LayoutLargeScreenComponent extends React.Component {
  propTypes : {

  }

  defaultProps : {

  }

  constructor(props) {
    super(props); 
    
    this.state = {
      subControls: <div></div>,
      activeCategory: '',
      activeSubCategory: ''
    }      
  }

  componentDidMount() {
    this.changeSubcategorys('HOME');
    this.changeActiveSubCateory('OVERVIEW');
    this.changeActiveSubCateory('OVERVIEW');
  }
  
  changeActiveCateory(category) {
    this.setState({
      activeCategory: category
    })
  }

  changeActiveSubCateory(category) {
    this.setState({
      activeSubCategory: category
    });
  }

  subCategoryAction(subcategory) {
    console.log(subcategory)
    switch (subcategory) {
      case 'OVERVIEW':
          this.changeActiveSubCateory('OVERVIEW');
        break;    
      case 'BACKLOG':
          this.changeActiveSubCateory('BACKLOG');
        break;    
      case 'QUERIES':
          this.changeActiveSubCateory('QUERIES');
        break; 
    }

    this.changeSubcategorys(this.state.activeCategory);
  }

  changeSubcategorys(category) {
    switch(category) {
      case 'HOME':
        this.changeActiveCateory('HOME');
        this.setState({
          subControls: <div>
            <FlatButton label="OVERVIEW" primary={false} disabled={false} 
                        className={(this.state.activeSubCategory == 'OVERVIEW')? 'category-and-subcategory-active': ''} 
                        onClick={this.subCategoryAction.bind(this, 'OVERVIEW')} />
          </div>
        });
        break;
      case 'CODE':
        this.changeActiveCateory('CODE');
        this.setState({
          subControls: <div>
            <FlatButton label="Primary" primary={false} disabled={false} 
                        className={(this.state.activeSubCategory == '')? 'category-and-subcategory-active': ''} 
                        onClick={this.subCategoryAction.bind(this, '')} />
            <FlatButton label="Primary" primary={false} disabled={false}
                        className={(this.state.activeSubCategory == '')? 'category-and-subcategory-active': ''} 
                        onClick={this.subCategoryAction.bind(this, '')} />
            <FlatButton label="Primary" primary={false} disabled={false} 
                        className={(this.state.activeSubCategory == '')? 'category-and-subcategory-active': ''} 
                        onClick={this.subCategoryAction.bind(this, '')}/>       
          </div>
        });
        break;
      case 'WORK':
        this.changeActiveCateory('WORK');
        this.setState({
          subControls: <div>
            <FlatButton label="BACKLOG" primary={false} disabled={false}
                        className={(this.state.activeSubCategory == 'BACKLOG')? 'category-and-subcategory-active': ''} 
                        onClick={this.subCategoryAction.bind(this, 'BACKLOG')} />
            <FlatButton label="QUERIES" primary={false} disabled={false}
                        className={(this.state.activeSubCategory == 'QUERIES')? 'category-and-subcategory-active': ''} 
                        onClick={this.subCategoryAction.bind(this, 'QUERIES')} />
          </div>
        });
        break;
      case 'BUILD':
        this.changeActiveCateory('BUILD');
        this.setState({
          subControls: <div>
            <FlatButton label="Primary" primary={false} disabled={false}
                        className={(this.state.activeSubCategory == '')? 'category-and-subcategory-active': ''} 
                        onClick={this.subCategoryAction.bind(this, '')} />
            <FlatButton label="Primary" primary={false} disabled={false}
                        className={(this.state.activeSubCategory == '')? 'category-and-subcategory-active': ''} 
                        onClick={this.subCategoryAction.bind(this, '')} />
            <FlatButton label="Primary" primary={false} disabled={false}
                        className={(this.state.activeSubCategory == '')? 'category-and-subcategory-active': ''} 
                        onClick={this.subCategoryAction.bind(this, '')} />
          </div>
        });
        break;
      case 'TEST':
        this.changeActiveCateory('TEST');
        this.setState({
          subControls: <div>
            <FlatButton label="Primary" primary={false} disabled={false} 
                        className={(this.state.activeSubCategory == '')? 'category-and-subcategory-active': ''} 
                        onClick={this.subCategoryAction.bind(this, '')}/>
            <FlatButton label="Primary" primary={false} disabled={false}
                        className={(this.state.activeSubCategory == '')? 'category-and-subcategory-active': ''} 
                        onClick={this.subCategoryAction.bind(this, '')} />
            <FlatButton label="Primary" primary={false} disabled={false}
                        className={(this.state.activeSubCategory == '')? 'category-and-subcategory-active': ''} 
                        onClick={this.subCategoryAction.bind(this, '')} />
          </div>
        });
        break; 
    }
    this.forceUpdate();
  }

  renderMainMenu() {
    
  }

  render() {
    return (
      <div className="layoutlargescreen-component"> 
          <AppBar title="Github Bugtracker" 
                  iconElementLeft={<div></div>} >            
              <FlatButton label="Primary" primary={false} disabled={false} />
              <FlatButton label="Help" primary={false} disabled={false} />
              <IconButton disableTouchRipple={false}>
                <Settings />
              </IconButton>
            </AppBar>  
            <Paper style={style} zDepth={2} >
              <div>
                <div>
                  <FlatButton label="HOME" primary={false} disabled={false} 
                              className={(this.state.activeCategory == 'HOME')? 'category-and-subcategory-active': ''} 
                              onClick={this.changeSubcategorys.bind(this, 'HOME')}/>

                  <FlatButton label="CODE" primary={false} disabled={false} 
                              className={(this.state.activeCategory == 'CODE')? 'category-and-subcategory-active': ''} 
                              onClick={this.changeSubcategorys.bind(this, 'CODE')} />

                  <FlatButton label="WORK" primary={false} disabled={false} 
                              className={(this.state.activeCategory == 'WORK')? 'category-and-subcategory-active': ''}
                              onClick={this.changeSubcategorys.bind(this, 'WORK')} />

                  <FlatButton label="BUILD" primary={false} disabled={false} 
                              className={(this.state.activeCategory == 'BUILD')? 'category-and-subcategory-active': ''}
                              onClick={this.changeSubcategorys.bind(this, 'BUILD')} />

                  <FlatButton label="TEST" primary={false} disabled={false} 
                              className={(this.state.activeCategory == 'TEST')? 'category-and-subcategory-active': ''}
                              onClick={this.changeSubcategorys.bind(this, 'TEST')} />
                </div>
                <div className="subcategorys-menu">
                {
                  this.state.subControls
                }
                </div>          
              </div>
            </Paper> 
      </div>
    );
  }
}

LayoutLargeScreenComponent.displayName = 'LayoutLargeScreenComponent';

export default LayoutLargeScreenComponent;
