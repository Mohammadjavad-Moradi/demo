import { headerActionTypes } from  './header.types';

const INITIAL_STATE = null;

const headerReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case headerActionTypes.SET_HEADER_DATA:
            const header = action.payload
            return {
                ...state,
                ...header
            }
        case headerActionTypes.GET_QUICK_LINKS: 
            return (
                state.quickLinksData
            )
        case headerActionTypes.GET_TAB_ITEMS_DATA:
            return (
                state.tabItemsData
            )
        default:
            return state;
    }
}

export default headerReducer;