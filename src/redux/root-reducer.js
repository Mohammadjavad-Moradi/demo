import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import headerReducer from './header/header.reducer';
import announcementsReducer from './announcements/announcements.reducer';
import tempNewsDataReducer from './temp-news-data/temp-news-data.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    header: headerReducer,
    announcements: announcementsReducer,
    tempNewsData: tempNewsDataReducer
});

export default rootReducer;