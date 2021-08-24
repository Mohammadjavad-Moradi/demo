import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';

import { getInitialAnnouncementsStart } from '../../redux/announcements/announcements.actions';

import { HomePageContainer } from './homepage.styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import WithSpinner from '../../components/atom-components/withSpinner/withSpinner.component';
import SlideShow from '../../components/newsPage-components/slideshow-news/slideshow-news.component';
import PayamBank from '../../components/newsPage-components/payam-bank/payam-bank.component';
import HorizontalNewsCards from '../../components/newsPage-components/horizental-news-box/horizental-news-box.component';

const HorizontalTabs = lazy(() => import('../../components/newsPage-components/horizontal-tabs/horizontal-tabs.component'));
const VerticalTabs = lazy(() => import('../../components/newsPage-components/vertical-tabs/vertical-tab.component'))

const HomePageContainerWithSpinner = WithSpinner(HomePageContainer)

const HomePage = ({getInitialAnnouncementsStart, announcementsFetched}) => {
    useEffect(() => {
        getInitialAnnouncementsStart()
    }, [getInitialAnnouncementsStart]);
    const theme = useTheme();
    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <HomePageContainerWithSpinner isLoading={announcementsFetched ? false : true}>
            <SlideShow />
                {
                    matchesXs ? <Suspense><HorizontalTabs /></Suspense> : <Suspense><VerticalTabs /></Suspense>
                }           
            <PayamBank />
            <HorizontalNewsCards />
        </HomePageContainerWithSpinner>
    )
}

const mapStateToProps = state => ({
    announcementsFetched: state.announcements.fetched
})

const mapDispatchToProps = dispatch => ({
    getInitialAnnouncementsStart: () => dispatch(getInitialAnnouncementsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);