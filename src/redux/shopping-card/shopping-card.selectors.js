import { createSelector } from 'reselect';

const selectShoppingCard = state => state.shoppingCard;

export const selectShoppingCardItems = createSelector(
    [selectShoppingCard],
    shoppingCard => shoppingCard.items
);

export const selectShoppingCardCount = createSelector(
    [selectShoppingCardItems],
    items => items.reduce((accumulatorQuantity, item) => accumulatorQuantity +item.quantity, 0)
);

export const selectTotalCost = createSelector(
    [selectShoppingCardItems],
    items => items.reduce((accumulatorPrice, item) => accumulatorPrice + item.price * item.quantity, 0)
);