import { headerActionTypes } from  './header.types';

const INITIAL_STATE = {
    headerData: null,
    isFetching: false,
    error: undefined,
    fetched: false
};

const headerReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case headerActionTypes.FETCH_HEADER_DATA_START:
            return {
                ...state,
                isFetching: true
            }
        case headerActionTypes.FETCH_HEADER_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                fetched: true,
                headerData: action.payload
            }
        case headerActionTypes.FETCH_HEADER_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        // case headerActionTypes.SET_HEADER_DATA:
        //     //const header = action.payload
        //     return {
        //         ...state,
        //         headerData: action.payload
        //     }
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