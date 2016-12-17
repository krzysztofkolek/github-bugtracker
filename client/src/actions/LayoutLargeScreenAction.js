export function setActiveCategory(activeCategory){
    console.log('setActiveCategory LAYOUTLARGESCREEN_SET_ACTIVE_CATEGORY');
    return {
        type: 'LAYOUTLARGESCREEN_SET_ACTIVE_CATEGORY',               
        payload: {
            activeCategory: activeCategory
        }
    }
}

export function setActiveSubCategory(activeSubCategory){
    return {
        type: 'LAYOUTLARGESCREEN_SET_ACTIVE_SUBCATEGORY',
        payload: {
            activeSubCategory: activeSubCategory
        }
    }
}

export function getActiveCategory(){
    return {
        type: 'LAYOUTLARGESCREEN_GET_ACTIVE_CATEGORY'
    }
}

export function getActiveSubCategory(){
    return {
        type: 'LAYOUTLARGESCREEN_GET_ACTIVE_SUBCATEGORY'
    }
}

export function getSubMenu(){
    return {
        type: 'LAYOUTLARGESCREEN_GET_SUBMENU'
    }
}