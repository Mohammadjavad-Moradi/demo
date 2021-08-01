export const addItemToCard = (items, itemToAdd) => {
    const existingCardItem = items.find(
        item => item.id === itemToAdd.id 
    );
    
    if (existingCardItem) { 
        return items.map(item => item.id === itemToAdd.id ? {...item, quantity: item.quantity + 1} : item);
    }
    
    return [...items, { ...itemToAdd, quantity: 1}]
};

export const setQuantity = (items, payload) => {
    console.log(payload)
    const existingCardItem = items.find(
        item => item.id === payload.itemToSet.id
    );
    
    if (existingCardItem) {
        return items.map(item => item.id === payload.itemToSet.id ? {...item, quantity: payload.quantityToSet} : item);
    }
}