import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { MainContainer, PageContainer } from './main-page.styles';

import HeaderContainer from '../../components/header-components/header-container/header-container.component';
import Footer from '../../components/footer-components/footer/footer.component';
import Spinner from '../../components/atom-components/spinner/spinner.component';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const HomePage = lazy(() => import('../homepage/homepage.component'));
const Announcements = lazy(() => import('../announcements/announcements.component'));
const SignInPage = lazy(() => import('../sign-in-page/sign-in-page.component'));
const ECommerce = lazy(() => import('../e-commerce/e-commerce.component'));
const SignUpPage = lazy(() => import('../sign-up-page/sign-up-page.component'));

const MainPage = ({ currentUser }) => {
    const theme = useTheme();
    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));
    return (
        <MainContainer>
            <HeaderContainer />
            <PageContainer xs={matchesXs ? 'true' : undefined}>
                <Switch>
                    <Suspense fallback={<Spinner />}>
                        <Route exact path='/' render={(props) => <HomePage {...props} />} />
                        <Route path='/announcements/:category' render={(props) => <Announcements {...props} />} />
                        <Route path='/ecommerce' render={(props) => <ECommerce {...props} />} />
                        <Route path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInPage />)} />
                        <Route path='/signup' render={() => currentUser ? (<Redirect to='/' />) : (<SignUpPage />)} />
                    </Suspense>
                </Switch>
            </PageContainer>
            <Footer />
        </MainContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(MainPage);