import { all, call, takeLatest, put } from 'redux-saga/effects';

import { userActionTypes } from '../user/user.types';
import { clearCard } from './shopping-card.actions';

export function* clearCardOnSignOut () {
    yield put(clearCard());
    
}

export function* onSignOutSuccess () {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCardOnSignOut)
}

export function* shoppingCardSagas () {
    yield(all([call(onSignOutSuccess)]))
}