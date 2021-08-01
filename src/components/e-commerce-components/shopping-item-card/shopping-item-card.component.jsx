import React from 'react';
import { connect } from 'react-redux';

import { removeItemFromCard, setItemQuantity } from '../../../redux/shopping-card/shopping-card.actions';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { CardContainer, CardContentContainer, ItemName, CardMediaContainer, CloseIconContainer } from './shopping-item-card.styles';

const ShoppingItemCard = ({item, removeItemFromCard, setItemQuantity}) => {
    const [quantity, setQuantity] = React.useState(item.quantity);
    const handleChange = (event) => {
        setQuantity(event.target.value);
        setItemQuantity(item, event.target.value);
      };
    return (
        <CardContainer>
            <CardMediaContainer
                image={item.mainImg}
                title={item.name}
            />
            <CardContentContainer>
                <div>   
                    <ItemName>{item.name}</ItemName>
                    <p>Price: &#36;{item.price}</p>
                    <p>Total Cost: &#36;{item.price * quantity}</p>
                    <FormControl variant="outlined">
                        <InputLabel id='quantity-indicator'>Quantity</InputLabel>
                        <Select
                            labelId='quantity-indicator'
                            id="select-quantity"
                            value={quantity}
                            label='quantity'
                            defaultValue={item.quantity}
                            onChange={handleChange}>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <CloseIconContainer onClick={() => removeItemFromCard(item)}/>
            </CardContentContainer>
        </CardContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    removeItemFromCard: item => dispatch(removeItemFromCard(item)),
    setItemQuantity: (item, quantity) => dispatch(setItemQuantity(item, quantity))
    
})

export default connect(null, mapDispatchToProps)(ShoppingItemCard);