import { announcementsActionTypes } from './announcements.types';

const INITIAL_STATE = null;

const announcementsReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case announcementsActionTypes.GET_INITIAL:
            const data  = action.payload
            return {
                ...state,
                ...data
            };
        case announcementsActionTypes.GET_LIST: 
            return state;
        case announcementsActionTypes.GET_FULL_DATA: 
            return state;
        default:
            return state;
    }
};

export default announcementsReducer;