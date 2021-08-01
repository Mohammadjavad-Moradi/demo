import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectShoppingCardItems } from '../../../redux/shopping-card/shopping-card.selectors';

import ShoppingItemCard from '../shopping-item-card/shopping-item-card.component';
import OrderSummary from '../order-summary/order-summary.component';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { AlertBox, Wrapper, ShoppingItemsWrapper } from './shopping-bag.styles';

const ShoppingBag = ({ shoppingItems }) => {
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div>         
            {   
                shoppingItems.length > 0 ?
                <Wrapper sm={ matchesSm ? 'true' : undefined }>
                    <OrderSummary />
                    <ShoppingItemsWrapper>
                        {shoppingItems.map((item, index) => (
                            <ShoppingItemCard item={item} key={index} />
                        ))  }          
                    </ShoppingItemsWrapper>
                </Wrapper>
                : 
                <AlertBox>You Don't Shop Anything</AlertBox>
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    shoppingItems: selectShoppingCardItems
})

export default connect(mapStateToProps)(ShoppingBag);