import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { addItem } from '../../../redux/shopping-card/shopping-card.actions';

import { CardMediaWrapper, CardWrapper, NameWrapper, PriceIndicator, ButtonContainer } from './item-card.styles';
import CustomButton from '../../atom-components/custom-button/custom-button.component';

const ItemCard = ({name, price, mainImg, secondImg, id, categoryLink, match, history, addItem}) => {
    
    const [hover, setHover] = React.useState(false);
    
    const hoverImage = () => {
        setHover(true)
    }
    const leaveImage = () => {
        setHover(false)
    }
    
    const toDetails = () => {
        if (match.url === '/ecommerce') {
            history.push(`${match.url}${categoryLink}/${id}`)
        } else {
            history.push(`${match.url}/${id}`)
        } 
    }
    
    const addItemToCard = () => {
        addItem({
            name: name,
            price: price,
            mainImg: mainImg,
            id: id
        })
    }
    
    return (
        <CardWrapper>
            <CardMediaWrapper image={hover === false ? mainImg : secondImg } title={name} onMouseEnter={hoverImage} onMouseLeave={leaveImage} onClick={() => toDetails()}/>
            <NameWrapper>{name}</NameWrapper>
            <PriceIndicator>
                <div>Price:</div>
                <div>${price}</div>
            </PriceIndicator>
            <ButtonContainer>
                <CustomButton variant="outlined" size='small' handleClick={() => addItemToCard()}>Add to card</CustomButton>
                <CustomButton variant="outlined" size='small' handleClick={() => toDetails()}>View details</CustomButton>
            </ButtonContainer>
        </CardWrapper>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default withRouter(connect(null, mapDispatchToProps)(ItemCard));