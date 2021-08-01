import React from 'react';
import { withRouter } from 'react-router-dom';

import { ImageContainer, TitleContainer, CategoryCardContainer } from './category-card.styles';

const CategoryCard = ({category, history, match}) => {
    const handleClick = (linkUrl) => {
        history.push(`${match.url}${linkUrl}`);
    }
    return (
        <CategoryCardContainer>
            <ImageContainer onClick={() => handleClick(category.linkUrl)}>
                <img src={category.imgUrl} alt={category.imageAlt} width='150px' height='150px'/>
            </ImageContainer>
            <TitleContainer onClick={() => handleClick(category.linkUrl)}>
                {category.title}
            </TitleContainer>
        </CategoryCardContainer>
    );
};

export default withRouter(CategoryCard);