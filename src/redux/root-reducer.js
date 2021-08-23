import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import headerReducer from './header/header.reducer';
import announcementsReducer from './announcements/announcements.reducer';
import tempNewsDataReducer from './temp-news-data/temp-news-data.reducer';
import shopReducer from './shop/shop.reducer';
import shoppingCardReducer from './shopping-card/shopping-card.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['tempNewsData', 'shop', 'shoppingCard']
}

const rootReducer = combineReducers({
    user: userReducer,
    header: headerReducer,
    announcements: announcementsReducer,
    tempNewsData: tempNewsDataReducer,
    shop: shopReducer,
    shoppingCard: shoppingCardReducer
});

export default persistReducer(persistConfig, rootReducer);