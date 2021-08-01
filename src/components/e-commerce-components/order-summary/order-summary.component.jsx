import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectShoppingCardCount, selectTotalCost} from '../../../redux/shopping-card/shopping-card.selectors'

import { SummaryContainer, SummaryContent, TotalTitle, Title } from './order-summary.styles';

import Divider from '@material-ui/core/Divider';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const OrderSummary = ({itemsCount, totalCost}) => {
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <SummaryContainer sm={ matchesSm ? 'true' : undefined}>
            <SummaryContent>
                <Title>ORDER SUMMARY</Title>
                <TotalTitle>
                    <p>Total Items:</p>
                    <p>{itemsCount}</p>
                </TotalTitle>
                <TotalTitle>
                    <p>Cost:</p>
                    <p>{totalCost}</p>
                </TotalTitle>
                <TotalTitle>
                    <p>Tax: </p>
                    <p>{totalCost * 0.05}</p>
                </TotalTitle>
                <TotalTitle>
                    <p>Delivery Cost: </p>
                    <p>{ totalCost > 100 ? 'Free' : 5}</p>
                </TotalTitle>
                <Divider />
                <TotalTitle>
                    <p>TOTAL:</p>
                    <p>{totalCost > 100 ? totalCost + totalCost * 0.05 : totalCost + totalCost * 0.05 + 5}</p>
                </TotalTitle>
            </SummaryContent>
        </SummaryContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    itemsCount: selectShoppingCardCount,
    totalCost: selectTotalCost
})

export default connect(mapStateToProps)(OrderSummary);