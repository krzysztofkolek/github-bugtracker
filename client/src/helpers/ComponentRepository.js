import React from 'react';

import {homeRepository} from './HomeViewRepository'
import {codeRepository} from './CodeViewRepository'
import {workRepository} from './WorkViewRepository'
import {buildRepository} from './BuildViewRepository'
import {testRepository} from './TestViewRepository'

export function componentLayout(menuCatergory, subMenuCategory) {
    switch (menuCatergory) {
        case 'HOME': {
            return homeRepository(subMenuCategory); 
        }
        case 'CODE': {
            return codeRepository(subMenuCategory); 
        }
        case 'WORK': {
            return workRepository(subMenuCategory); 
        }
        case 'BUILD': {
            return buildRepository(subMenuCategory); 
        }
        case 'TEST': {
            return testRepository(subMenuCategory); 
        }
    }
    return <div></div>;
}