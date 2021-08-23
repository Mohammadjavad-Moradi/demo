import { announcementsActionTypes } from './announcements.types';

const INITIAL_STATE = {
    announcementsData: null,
    isFetching: false,
    error: null,
    fetched: false
};

const announcementsReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case announcementsActionTypes.GET_INITIAL_ANNOUNCEMENTS_START:
            return {
                ...state,
                isFetching: true
            }
        case announcementsActionTypes.GET_INITIAL_ANNOUNCEMENTS_SUCCESS:
            return {
                ...state,
                announcementsData: action.payload,
                isFetching: false,
                error: null,
                fetched: true
            };
        case announcementsActionTypes.GET_INITIAL_ANNOUNCEMENTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default announcementsReducer;