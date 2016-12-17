export default function reducer(state={activeCategory: 'HOME', activeSubCategory: 'OVERVIEW'}, action) {
    switch(action.type) {
        case 'LAYOUTLARGESCREEN_SET_ACTIVE_CATEGORY': {
            return {...state, 
                    activeCategory: action.payload.activeCategory}
        }
        case 'LAYOUTLARGESCREEN_SET_ACTIVE_SUBCATEGORY': {
            return {...state, 
                    activeSubCategory: action.payload.activeSubCategory}
        }
        case 'LAYOUTLARGESCREEN_GET_ACTIVE_CATEGORY': {
            return {...state}
        }
        case 'LAYOUTLARGESCREEN_GET_ACTIVE_SUBCATEGORY': {
            return {...state}
        }
    }
    return state;
}