import React from 'react';

import OverviewManagmentComponent from '../components/home/OverviewManagmentComponent'
import SprintInformationPanelComponent from '../components/home/SprintInformationPanelComponent'
import BurndownChartComponent from '../components/home/BurndownChartComponent'
import TeamFavoritesPanelComponent from '../components/home/TeamFavoritesPanelComponent'
import OverviewRightPanelComponent from '../components/home/OverviewRightPanelComponent'

export function homeRepository(subMenuCategory) {
    switch (subMenuCategory) {
        case 'OVERVIEW':
            return [             
                <div key="1" data-grid={{x: 0, y: 0, w: 8, h: 1, static: true}}><OverviewManagmentComponent /></div>,
                <div key="2" data-grid={{x: 0, y: 1, w: 4, h: 1 }}><SprintInformationPanelComponent /></div>,
                <div key="3" data-grid={{x: 4, y: 1, w: 4, h: 1 }}><BurndownChartComponent /></div>,
                <div key="4" data-grid={{x: 0, y: 2, w: 8, h: 3 }}><TeamFavoritesPanelComponent /></div>,
                <div key="5" data-grid={{x: 8, y: 0, w: 4, h: 6 }}><OverviewRightPanelComponent /></div>
            ];            
    }
    return <div></div>;
}