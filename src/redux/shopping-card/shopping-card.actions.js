import { shoppingCardActionTypes } from './shopping-card.types';

export const addItem = item => ({
    type: shoppingCardActionTypes.ADD_ITEM_TO_CARD,
    payload: item
});

export const removeItemFromCard = item => ({
    type: shoppingCardActionTypes.REMOVE_ITEM_FROM_CARD,
    payload: item
});

export const setItemQuantity = (item, quantity) => ({
    type: shoppingCardActionTypes.SET_ITEM_QUANTITY,
    payload: {
        itemToSet: item,
        quantityToSet: quantity
    }
});