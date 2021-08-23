import { all, call, takeLatest, put} from 'redux-saga/effects'

import { firestore, getAnnouncementsData } from '../../firebase/firebase.utils';

import { announcementsActionTypes } from './announcements.types';

import { getInitialAnnouncementsSuccess, getInitialAnnouncementsFailure } from './announcements.actions';

export function* GetAnnouncements () {
    try {
        const collectionRef = yield firestore.collection('announcements').get();
        const announcements = yield call(getAnnouncementsData, collectionRef);
        yield put(getInitialAnnouncementsSuccess(announcements));
    } catch (error) {
        yield put(getInitialAnnouncementsFailure(error))
    }
};

export function* onGetAnnouncementsStart () {
    yield takeLatest(announcementsActionTypes.GET_INITIAL_ANNOUNCEMENTS_START, GetAnnouncements)
};

export function* announcementsSagas() {
    yield(all([call(onGetAnnouncementsStart)]))
};