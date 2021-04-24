import tempNewsDataActionTypes from './temp-news-data.types';

const INITIAL_STATE = {
    newsData: null,
    isFetching: false,
    count: 0,
    currentPage: 1,
    pageSize: 10,
    firstIndex: 1,
    lastIndex: null,
    category: null,
    errorMessage: undefined
};

const tempNewsDataReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case tempNewsDataActionTypes.FETCH_NEWS_DATA_START: 
            return {
                ...state,
                isFetching: true,
                newsData: null
            }
        case tempNewsDataActionTypes.FETCH_NEWS_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                newsData: action.payload.newsData,
                count: action.payload.count,
                lastIndex: action.payload.pageSize,
                currentPage: 1,
                firstIndex: 1,
                category: action.payload.collectionName,
                pageSize: action.payload.pageSize
            }
        case tempNewsDataActionTypes.FETCH_NEWS_DATA_NEXT_PAGE:
            return {
                ...state,
                isFetching: false,
                newsData: action.payload.newsData,
                currentPage: action.payload.nextPageIndicator,
                firstIndex: action.payload.firstIndex,
                lastIndex: action.payload.lastIndex
            }
        case tempNewsDataActionTypes.FETCH_NEWS_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default tempNewsDataReducer;