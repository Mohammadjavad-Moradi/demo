import React from 'react';
import { withRouter } from 'react-router-dom';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { ParallaxBanner } from 'react-scroll-parallax';

import { TitleContainer, TitleText } from './parallax-image.styles';

const ParallaxImage = ({history, match}) => {
    
    const theme = useTheme();
    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));
    
    const handleClick = () => {
        history.push(`${match.path}/women`)
    }
    
    return (
        <ParallaxBanner
            layers={[
                {
                    image: `${matchesXs ? '/assets/women-category-banner-mobile.png': '/assets/women-category-banner.png'}`,
                    amount: 0.25,
                    expanded: true
                }
            ]}
            style={{
                height: '700px',
            }}
        >
            <TitleContainer >
                <TitleText xs={ matchesXs ? 'true' : undefined } onClick={() => handleClick()}>
                    Women Clothing
                </TitleText>
            </TitleContainer>
        </ParallaxBanner>
    );
};

export default withRouter(ParallaxImage);