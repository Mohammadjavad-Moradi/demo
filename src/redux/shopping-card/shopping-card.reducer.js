import { shoppingCardActionTypes } from './shopping-card.types';

import { addItemToCard, setQuantity } from './shopping-card.utils';

const INITIAL_STATE = {
    items: []
};

const shoppingCardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shoppingCardActionTypes.ADD_ITEM_TO_CARD: 
            return {
                ...state,
                items: addItemToCard(state.items, action.payload)
            }
        case shoppingCardActionTypes.REMOVE_ITEM_FROM_CARD:
            return {
                ...state,
                items: state.items.filter( item => item.id !== action.payload.id)
            }
        case shoppingCardActionTypes.SET_ITEM_QUANTITY:
            console.log(action.payload)
            return {
                ...state,
                items: setQuantity(state.items, action.payload)
            }
        case shoppingCardActionTypes.CLEAR_CARD:
            return {
                ...state,
                items: []
            }
        default:
                return state;
    };
};

export default shoppingCardReducer;