'use strict';

require('styles//LayoutLargeScreen.scss');

import React from 'react';
import {connect} from "react-redux"

import AppBar from 'material-ui/AppBar';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import _ from 'lodash';
import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);
import {componentLayout} from '../helpers/ComponentRepository'

import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Settings from 'material-ui/svg-icons/action/settings';
import Paper from 'material-ui/Paper';

import {setActiveCategory, setActiveSubCategory, getActiveCategory, getActiveSubCategory} from '../actions/LayoutLargeScreenAction'

const style = {
  height: 80,
  width: 'auto',
  margin: 20,
  textAlign: 'center',
  display: '-webkit-box',
  margin: 0
};

@connect((store) => {
  return {
    menu: store.layoutLargeScreen
  };
})
class LayoutLargeScreenComponent extends React.Component {
  propTypes : {}

  defaultProps : {}
   
  constructor(props) {
    super(props);
 
  }

  changeActiveCateory(category) {
    this.props.dispatch(setActiveCategory(category));
    var subCategory = this.changeDefaultSubcategory(category);
    this.props.dispatch(setActiveSubCategory(subCategory));
  }

  changeDefaultSubcategory(mainCategory) {
    var defaultSubCategory = '';
    switch(mainCategory) {
      case 'HOME': {
        defaultSubCategory = 'OVERVIEW';
        break;
      }
      case 'CODE': {
        defaultSubCategory = '';
        break;
      }
      case 'WORK': {
        defaultSubCategory = 'BACKLOG';
        break;
      }
      case 'BUILD': {
        defaultSubCategory = '';
        break;
      }
      case 'Test': {
        defaultSubCategory = '';
        break;
      }
    }
    return defaultSubCategory;
  }

  subCategoryAction(category) {
    this.props.dispatch(setActiveSubCategory(category));
  }

  changeSubcategorys(category) {
    switch (category) {
      case 'HOME': 
        return(
           <div>
              <FlatButton label="OVERVIEW" primary={false} disabled={false}
                          className={(this.props.menu.activeSubCategory == 'OVERVIEW')? 'category-and-subcategory-active' : ''}
                          onClick={this.subCategoryAction.bind(this, 'OVERVIEW')}/>
            </div>);
      case 'CODE':
        return(
           <div>
              <FlatButton 
                label="Primary" primary={false} disabled={false}
                className={(this.props.menu.activeSubCategory == '')? 'category-and-subcategory-active' : ''}
                onClick={this.subCategoryAction.bind(this, '')}/>
              <FlatButton
                label="Primary" primary={false} disabled={false}
                className={(this.props.menu.activeSubCategory == '')? 'category-and-subcategory-active' : ''}
                onClick={this.subCategoryAction.bind(this, '')}/>
              <FlatButton
                label="Primary" primary={false} disabled={false}
                className={(this.props.menu.activeSubCategory == '')? 'category-and-subcategory-active' : ''}
                onClick={this.subCategoryAction.bind(this, '')}/>
            </div>
        );
      case 'WORK':
        return(
          <div>
              <FlatButton
                label="BACKLOG" primary={false} disabled={false}
                className={(this.props.menu.activeSubCategory == 'BACKLOG')
                ? 'category-and-subcategory-active' : ''}
                onClick={this.subCategoryAction.bind(this, 'BACKLOG')}/>
              <FlatButton
                label="QUERIES" primary={false} disabled={false}
                className={(this.props.menu.activeSubCategory == 'QUERIES')? 'category-and-subcategory-active': ''}
                onClick={this.subCategoryAction.bind(this, 'QUERIES')}/>
            </div>
        );
      case 'BUILD':
        return(
           <div>
              <FlatButton
                label="Primary" primary={false} disabled={false} 
                className={(this.props.menu.activeSubCategory == '')? 'category-and-subcategory-active' : ''}
                onClick={this.subCategoryAction.bind(this, '')}/>
              <FlatButton
                label="Primary" primary={false} disabled={false}
                className={(this.props.menu.activeSubCategory == '')? 'category-and-subcategory-active': ''}
                onClick={this.subCategoryAction.bind(this, '')}/>
              <FlatButton
                label="Primary" primary={false} disabled={false}
                className={(this.props.menu.activeSubCategory == '')? 'category-and-subcategory-active': ''}
                onClick={this.subCategoryAction.bind(this, '')}/>
            </div>
        );
      case 'TEST':
        return(
          <div>
              <FlatButton
                label="Primary" primary={false} disabled={false}
                className={(this.props.menu.activeSubCategory == '')? 'category-and-subcategory-active' : ''}
                onClick={this.subCategoryAction.bind(this, '')}/>
              <FlatButton
                label="Primary" primary={false} disabled={false}
                className={(this.props.menu.activeSubCategory == '')? 'category-and-subcategory-active' : ''}
                onClick={this.subCategoryAction.bind(this, '')}/>
              <FlatButton
                label="Primary" primary={false} disabled={false}
                className={(this.props.menu.activeSubCategory == '')? 'category-and-subcategory-active' : ''}
                onClick={this.subCategoryAction.bind(this, '')}/>
            </div>
        );
    }
  }

  render() {
    const subMenu = this.changeSubcategorys(this.props.menu.activeCategory);
    return (
      <div className="layoutlargescreen-component">
        <AppBar title="Github Bugtracker" iconElementLeft={< div > </div>}>
          <FlatButton label="Primary" primary={false} disabled={false}/>
          <FlatButton label="Help" primary={false} disabled={false}/>
          <IconButton disableTouchRipple={false}>
            <Settings/>
          </IconButton>
        </AppBar>
        <Paper style={style} zDepth={2}>
          <div>
            <div>
              <FlatButton
                label="HOME" primary={false} disabled={false}
                className={(this.props.menu.activeCategory == 'HOME')? 'category-and-subcategory-active': ''}
                onClick={this.changeActiveCateory.bind(this, 'HOME')}/>

              <FlatButton
                label="CODE" primary={false} disabled={false}
                className={(this.props.menu.activeCategory == 'CODE')? 'category-and-subcategory-active': ''}
                onClick={this.changeActiveCateory.bind(this, 'CODE')}/>

              <FlatButton
                label="WORK" primary={false} disabled={false}
                className={(this.props.menu.activeCategory == 'WORK')? 'category-and-subcategory-active': ''}
                onClick={this.changeActiveCateory.bind(this, 'WORK')}/>

              <FlatButton
                label="BUILD" primary={false} disabled={false}
                className={(this.props.menu.activeCategory == 'BUILD')? 'category-and-subcategory-active': ''}
                onClick={this.changeActiveCateory.bind(this, 'BUILD')}/>

              <FlatButton
                label="TEST" primary={false} disabled={false} 
                className={(this.props.menu.activeCategory == 'TEST')? 'category-and-subcategory-active': ''}
                onClick={this.changeActiveCateory.bind(this, 'TEST')}/>
            </div>
            <div className="subcategorys-menu"> 
            { subMenu }
            </div>
          </div>
        </Paper>

        <div className="main-content">
          <ResponsiveReactGridLayout 
            onBreakpointChange={this.onBreakpointChange}
            onLayoutChange={this.onLayoutChange}
            measureBeforeMount={false}
            useCSSTransforms={false} >
              {componentLayout(this.props.menu.activeCategory, this.props.menu.activeSubCategory)}
          </ResponsiveReactGridLayout>
        </div>
      </div>
    );
  }
}

LayoutLargeScreenComponent.displayName = 'LayoutLargeScreenComponent';

export default LayoutLargeScreenComponent;
