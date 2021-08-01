import React from 'react';

import { BoxWrapper, ImageToShow, SlideBox } from './image-box.styles';

const ImageBox = ({imageData}) => {
    const [value, setValue] = React.useState(0);
    const handleClick = (index) => {
        setValue(index);
    }
    return (
        <BoxWrapper>
            <ImageToShow>
                <img src={imageData[value]} alt='selected' width='100%' height='100%'/>
            </ImageToShow>
            <SlideBox>
                {
                    imageData.map((image, index) => (
                        <img key={index} src={image} alt='item images' height='50px' width='50px' onClick={() => handleClick(index)}/>
                    ))
                }
            </SlideBox>
        </BoxWrapper>
    );
};

export default ImageBox;