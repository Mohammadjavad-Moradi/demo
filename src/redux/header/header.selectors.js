import { createSelector } from 'reselect';

const selectHeader = state => state.header.headerData;

export const selectQuickLinks = createSelector(
    [selectHeader],
    headerData => headerData ? headerData.quickLinksData : []
);

export const selectTabItems = createSelector(
    [selectHeader],
    headerData => headerData ? headerData.tabItemsData.contents : []
);

export const selectHeaderData = createSelector(
    [selectHeader],
    headerData => headerData ? Object.keys(headerData).map( key => headerData[key]) : []
)