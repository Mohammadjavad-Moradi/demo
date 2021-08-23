import { announcementsActionTypes } from './announcements.types';

export const getInitialAnnouncementsStart = () => ({
    type: announcementsActionTypes.GET_INITIAL_ANNOUNCEMENTS_START
});

export const getInitialAnnouncementsSuccess = announcements => ({
    type: announcementsActionTypes.GET_INITIAL_ANNOUNCEMENTS_SUCCESS,
    payload: announcements
});

export const getInitialAnnouncementsFailure = error => ({
    type: announcementsActionTypes.GET_INITIAL_ANNOUNCEMENTS_FAILURE,
    payload: error
});