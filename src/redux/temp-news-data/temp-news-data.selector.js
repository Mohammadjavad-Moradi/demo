import { createSelector } from 'reselect';

const selectTempNewsData = state => state.tempNewsData;

export const selectNewsData = createSelector(
    [selectTempNewsData],
    tempNewsData => Object.keys(tempNewsData.newsData).map(key => tempNewsData.newsData[key])
);

export const selectIsNewsDataFetching = createSelector(
    [selectTempNewsData],
    tempNewsData => tempNewsData.isFetching
);

export const selectNewsDataCount = createSelector(
    [selectTempNewsData],
    tempNewsData => tempNewsData.count
);

export const selectCurrentPage = createSelector(
    [selectTempNewsData],
    tempNewsData => tempNewsData.currentPage
);

export const selectPageSize = createSelector(
    [selectTempNewsData],
    tempNewsData => tempNewsData.pageSize
);

export const selectFirstIndex = createSelector(
    [selectTempNewsData],
    tempNewsData => tempNewsData.firstIndex
);

export const selectLastIndex = createSelector(
    [selectTempNewsData],
    tempNewsData => tempNewsData.lastIndex
);

export const selectIsNewsDataLoaded = currentCategory => 
    createSelector(
        [selectTempNewsData],
        tempNewsData => !!tempNewsData.newsData === false || tempNewsData.category !== currentCategory ? true : false
    );

export const selectCategory = createSelector(
    [selectTempNewsData],
    tempNewsData => tempNewsData.category
)

export const selectFullNewsData = params => 
    createSelector(
        [selectTempNewsData],
        tempNewsData => tempNewsData.category === params.category && tempNewsData.newsData[params.newsId] ? tempNewsData.newsData[params.newsId] : []
    )