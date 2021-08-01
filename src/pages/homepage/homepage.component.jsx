import React from 'react';

import { HomePageContainer } from './homepage.styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import SlideShow from '../../components/newsPage-components/slideshow-news/slideshow-news.component';
import VerticalTabs from '../../components/newsPage-components/vertical-tabs/vertical-tab.component';
import PayamBank from '../../components/newsPage-components/payam-bank/payam-bank.component';
import HorizontalTabs from '../../components/newsPage-components/horizontal-tabs/horizontal-tabs.component';
import HorizontalNewsCards from '../../components/newsPage-components/horizental-news-box/horizental-news-box.component';


const HomePage = () => {
    const theme = useTheme();
    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <HomePageContainer>
            <SlideShow />
            {
                matchesXs ? <HorizontalTabs /> : <VerticalTabs />
            }
            <PayamBank />
            <HorizontalNewsCards />
        </HomePageContainer>
    )
}

export default HomePage;