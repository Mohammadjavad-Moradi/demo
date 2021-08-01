import React from 'react';

import ItemCard from '../item-card/item-card.component';
import { TitleContainer, CardsContainer } from './category-details.styles';

const CategoryDetails = ({data, match}) => {   
    const genderData = data[match.params.gender];

    return (
        <div>
            <TitleContainer>
                {genderData.title}
            </TitleContainer>
            <CardsContainer>
                {
                    Object.keys(genderData.content).map(key => genderData.content[key]).map(({...otherProps}, index) => (
                        <ItemCard {...otherProps} key={index} />
                    ))
                }
            </CardsContainer>
        </div>
    );
};

export default CategoryDetails;