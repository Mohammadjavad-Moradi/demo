import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectSpecialPreview, selectSpecialTitle, selectSpecialLinkUrl } from '../../../redux/announcements/announcements.selector';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { SlideItem, 
    SlideshowContainer, 
    CarouselContainer, 
    GridItemTitle, 
    GridItem,
    ContentWrapper,
    SummaryWrapper,
    ImageWrapper,
    Image } from './slideshow-news.styles';

import TitleContainer from '../../atom-components/title-container/title-container.component';
import CustomButton from '../../atom-components/custom-button/custom-button.component';

const SlideShow = ({announcementPreview, title, linkUrl, history}) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <SlideshowContainer>
            <TitleContainer name={title} linkUrl={linkUrl} color='grey'/>
            {   
                <CarouselContainer interval='4000' animation='slide' indicators={false} autoPlay={true}>
                    {announcementPreview.map((item, index) => (
                        <SlideItem key={index}>
                            <GridItemTitle onClick={() => history.push(`${linkUrl}/${item.id}`)}>{item.title}</GridItemTitle>
                            <ContentWrapper isxs={matches ? 'true' : undefined }>
                                {
                                    item.imageUrl ? 
                                    <ImageWrapper isxs={matches ? 'true' : undefined }>
                                        <Image url={item.imageUrl} alt={item.title} />
                                    </ImageWrapper>
                                    : null
                                }
                                <SummaryWrapper isxs={matches ? 'true' : undefined }>{item.summary}</SummaryWrapper>
                            </ContentWrapper>
                            <GridItem >{item.date}</GridItem>
                            <CustomButton variant='outlined' color='secondary' component='link' to={`${linkUrl}/${item.id}`} size='medium'>
                            Continue     
                            </CustomButton>
                        </SlideItem>
                    ))}
                </CarouselContainer>
            }
        </SlideshowContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    announcementPreview: selectSpecialPreview,
    title: selectSpecialTitle,
    linkUrl: selectSpecialLinkUrl
})

export default withRouter(connect(mapStateToProps)(SlideShow));