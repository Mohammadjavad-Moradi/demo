import { announcementsActionTypes } from './announcements.types';

export const initialAnnouncements = announcements => ({
    type: announcementsActionTypes.GET_INITIAL,
    payload: announcements
});