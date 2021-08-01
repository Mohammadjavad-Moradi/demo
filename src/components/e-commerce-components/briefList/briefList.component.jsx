import React from 'react';
import { withRouter } from 'react-router-dom';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';

import ItemCard from '../item-card/item-card.component';

import { TitleWrapper, CardContainer } from './briefList.styles';

const BriefList = ({data, history, match}) => {
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));

    const dataArr = Object.keys(data.content).map(key => data.content[key])
    let count = 3;
    if (matchesMd) { count = 2 };
    if (matchesXs) { count = 1 };

    const slidesNum = Math.ceil(dataArr.length / count);
    const organizedContent = [];
    let startIndex = 0;
    let endIndex = count;

    for ( let i = 0; i < slidesNum ; i++) {
        let tem = dataArr.slice(startIndex, endIndex);
        organizedContent.push(tem);
        startIndex = startIndex + count;
        i === slidesNum - 2 ? endIndex = dataArr.length : endIndex = endIndex + count;
    }
    
    const handleClick = () => {
        history.push(`${match.url}${data.linkUrl}`)
    }
    
    return (
        <React.Fragment>
            <TitleWrapper onClick={() => handleClick()}>{data.title}</TitleWrapper>
            <Carousel stopAutoPlayOnHover={true} animation='slide' indicators={false} navButtonsAlwaysVisible={false} autoPlay={true}>
                {
                    organizedContent.map((item, index) => (
                        <CardContainer key={index}>
                            {
                                item.map(({...otherProps}, id) => (
                                    <ItemCard {...otherProps} key={id} categoryLink={data.linkUrl}/>
                                ))
                            }
                        </CardContainer>
                    ))
                }
            </Carousel>
        </React.Fragment>
    );
};

export default withRouter(BriefList);