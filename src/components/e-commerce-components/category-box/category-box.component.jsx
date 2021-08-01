import React from 'react';

import CategoryCard from '../categoty-card/category-card.component';

import { CategoryBoxWrapper } from './category-box.styles';

const CatagoryBox = ({data}) => {

    const dataArr = Object.keys(data).map(key => data[key]);
    
    return (
        <CategoryBoxWrapper>
            {
                dataArr.map((category, index) => (
                    <CategoryCard key={index} category={category}/>               
                ))
            }
        </CategoryBoxWrapper>
    );
};

export default CatagoryBox;