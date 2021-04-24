import React from 'react';

import { HomePageContainer } from './homepage.styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import SlideShow from '../../components/slideshow-news/slideshow-news.component';
import VerticalTabs from '../../components/vertical-tabs/vertical-tab.component';
import PayamBank from '../../components/payam-bank/payam-bank.component';
import HorizontalTabs from '../../components/horizental-tabs/horizontal-tabs.component';
import BankNews from '../../components/news-box/news-box.component';


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
            <BankNews />
        </HomePageContainer>
    )
}

export default HomePage;