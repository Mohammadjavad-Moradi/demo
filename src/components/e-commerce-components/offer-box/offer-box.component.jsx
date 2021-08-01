import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { ImageContainer, OfferTitle } from './offer-box.syles';

const OfferBox = () => {
    
    const theme = useTheme();
    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'))
    
    return (
        <ImageContainer sm={matchesXs ? 'true' : undefined}>
            <OfferTitle xs={matchesXs ? 'true' : undefined}>
                Today Offer
            </OfferTitle>
        </ImageContainer>
    );
};

export default OfferBox;