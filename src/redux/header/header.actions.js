import { headerActionTypes } from './header.types';

export const setHeaderData = headerData => ({
    type: headerActionTypes.SET_HEADER_DATA,
    payload: headerData
});

export const quickLinks = () => ({
    type: headerActionTypes.GET_QUICK_LINKS
});

export const tabItemsData = () => ({
    type: headerActionTypes.GET_TAB_ITEMS_DATA
})