import React from 'react';

import { GridListContainer, SlideWrapper, GridListTileContainer, LinkContainer } from './quick-links-slider.styles';

const QuickLinksSlider = ({ titleData }) => {

    return (
        <SlideWrapper>
            <GridListContainer>
                {titleData.content.map((title, index) => (
                    <GridListTileContainer key={index}>
                        <LinkContainer to={title.linkUrl}>{title.title}</LinkContainer>
                    </GridListTileContainer>
                ))}
            </GridListContainer>
        </SlideWrapper>
    );
}

export default QuickLinksSlider;