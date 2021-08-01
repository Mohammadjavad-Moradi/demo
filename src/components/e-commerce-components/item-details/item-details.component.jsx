import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import ImageBox from '../image-box/image-box.component';
import DetailBox from '../detail-box/detail-box.component';

import { PageWrapper } from './item-details.styles';

const ItemDetails = ({match, data}) => {
    
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
    
    const itemData = data[match.params.gender].content[match.params.id];
    return (
        <PageWrapper sm={matchesSm ? 'true': undefined}>
            <ImageBox imageData={itemData.allImg}/>
            <DetailBox boxData={itemData} />
        </PageWrapper>
    );
};

export default ItemDetails;