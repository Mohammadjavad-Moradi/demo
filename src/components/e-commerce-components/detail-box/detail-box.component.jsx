import React from 'react';
import { connect } from 'react-redux'

import { addItem } from '../../../redux/shopping-card/shopping-card.actions';

import CustomButton from '../../atom-components/custom-button/custom-button.component';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { BoxWrapper,
     NameContainer, 
     PriceContainer, 
     DescriptionContainer, 
     DescriptionTitle, 
     DescriptionText, 
     SpecContainer } from './detail-box.styles';

const DetailBox = ({boxData, addItem}) => {
    
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
    
    const addItemToCard = () => {
        addItem({
            name: boxData.name,
            price: boxData.price,
            mainImg: boxData.mainImg,
            id: boxData.id
        })
    }
    
    return (
        <BoxWrapper sm={matchesSm ? 'true': undefined}>
            <NameContainer>{boxData.name}</NameContainer>
            <PriceContainer>
                Price: ${boxData.price}
            </PriceContainer>
            <DescriptionTitle>Description:</DescriptionTitle>
            <DescriptionContainer>
                <DescriptionText>{boxData.description}</DescriptionText>          
            </DescriptionContainer>
            <DescriptionTitle>Specifications:</DescriptionTitle>
            <SpecContainer>
                {
                    boxData.specification.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </SpecContainer>
            <CustomButton variant="outlined" size='small' handleClick={() => addItemToCard()}>Add to card</CustomButton>
        </BoxWrapper>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(DetailBox);