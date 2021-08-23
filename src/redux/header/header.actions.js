import { headerActionTypes } from './header.types';

export const fetchHeaderDataStart = () => ({
    type: headerActionTypes.FETCH_HEADER_DATA_START
});

export const fetchHeaederDataSuccess = headerData => ({
    type: headerActionTypes.FETCH_HEADER_DATA_SUCCESS,
    payload: headerData
});

export const fetchHeaderDataFailure = error => ({
    type: headerActionTypes.FETCH_HEADER_DATA_FAILURE,
    payload: error
});