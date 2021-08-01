import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectShoppingCardCount } from '../../../redux/shopping-card/shopping-card.selectors';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

const ShoppingCard = ({shoppingCount}) => {
    return (
        <Badge badgeContent={shoppingCount} color="primary">
            <ShoppingCartIcon/>
        </Badge>
    );
}

const mapStateToProps = createStructuredSelector ({
    shoppingCount: selectShoppingCardCount
})

export default connect(mapStateToProps)(ShoppingCard);