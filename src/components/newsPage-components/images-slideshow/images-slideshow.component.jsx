import React from 'react';

import GridListTile from '@material-ui/core/GridListTile';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { GridListContainer, SlideWrapper, ImageWrapper } from './images-slideshow.styles';



export default function ImagesSlideshow({ tileData }) {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    const colsNum = () => {
        return matches ? 1.5 : 2.5
    }

    return (
        <SlideWrapper>
            <GridListContainer cols={parseInt(colsNum)}>
                {tileData.map((tile, index) => (
                    <GridListTile key={index} >
                        <ImageWrapper src={tile.imageUrl} alt={tile.alt} />
                    </GridListTile>
                ))}
            </GridListContainer>
        </SlideWrapper>
    );
}
