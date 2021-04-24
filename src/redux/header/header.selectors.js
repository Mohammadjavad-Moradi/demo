import { createSelector } from 'reselect';

const selectHeader = state => state.header;

export const selectQuickLinks = createSelector(
    [selectHeader],
    header => header ? header.quickLinksData : []
);

export const selectTabItems = createSelector(
    [selectHeader],
    header => header ? header.tabItemsData.contents : []
);

export const selectHeaderData = createSelector(
    [selectHeader],
    header => header ? Object.keys(header).map( key => header[key]) : []
)