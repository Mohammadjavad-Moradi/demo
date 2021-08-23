import { all, call  } from "redux-saga/effects";

import { fetchHeaderDataStart } from './header/header.sagas';
import { userSagas } from "./user/user.sagas";
import { shoppingCardSagas } from './shopping-card/shopping-card.sagas';
import { announcementsSagas } from './announcements/announcements.sagas';

export default function* rootSaga () {
    yield all([call(fetchHeaderDataStart), call(userSagas), call(shoppingCardSagas), call(announcementsSagas)]);
}