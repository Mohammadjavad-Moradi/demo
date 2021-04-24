import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { MainContainer, PageContainer } from './main-page.styles';

import HeaderContainer from '../../components/header/header-container.component';
import Announcements from '../announcements/announcements.component';
import HomePage from '../homepage/homepage.component';
import Footer from '../../components/footer/footer.component';
import SignInPage from '../sign-in-page/sign-in-page.component';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from  '../../redux/user/user.selectors';


const MainPage = ({currentUser}) => {
    return (
        <MainContainer>
            <HeaderContainer />
            <PageContainer>
                <Switch>
                    <Route exact path='/' render={(props) => <HomePage {...props} />} />
                    <Route path='/announcements/:category' render={(props) => <Announcements {...props} />} />
                    <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInPage />)} />
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