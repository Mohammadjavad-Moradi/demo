import { takeEvery, call, put } from 'redux-saga/effects';

import { firestore, getHeaderData } from '../../firebase/firebase.utils';

import { fetchHeaederDataSuccess, fetchHeaderDataFailure } from './header.actions';

import {headerActionTypes} from './header.types';

export function* fetchHeaderDataAsync () {
    try {
        const collectionRef = yield firestore.collection('header').get();
        const data = yield call(getHeaderData, collectionRef);
        yield put(fetchHeaederDataSuccess(data));
    } catch (err) {
        yield put(fetchHeaderDataFailure(err));   
    }
}

export function* fetchHeaderDataStart () {
    yield takeEvery(
        headerActionTypes.FETCH_HEADER_DATA_START,
        fetchHeaderDataAsync
    );
}