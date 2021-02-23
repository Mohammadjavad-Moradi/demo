import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from './theme';

import NewsPage from './pages/news/news.component';
import HeaderContainer from './components/header/header-container.component';
import HomePage from './pages/homepage/homepage.component';
import SignInPage from './pages/sign-in-page/sign-in-page.component';
import { auth, createUserProfile } from './firebase/firebase.utils';
import Footer from './components/footer/footer.component';

import { setCurrentUser } from './redux/user/user.actions';

import { MainContainer, PageContainer } from './app.styles';

function App ({ currentUser, setCurrentUser }) {
  
  useEffect(() => {
    let unSubscribeFromAuth = null
    unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      const userRef = await createUserProfile(userAuth);

      if(userAuth) {
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
            ...snapshot.data()}
          )
        })
        
      } else {
        setCurrentUser(userAuth)
      }
    })
    return function cleanUp() {
      unSubscribeFromAuth();
    }    
  },[])

  return (
    <MaterialThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <MainContainer>
          <HeaderContainer/>
          <PageContainer>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/news' component={NewsPage} />
              <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInPage/>) } />
            </Switch>
          </PageContainer>
          <Footer />
        </MainContainer>
      </StyledThemeProvider>
    </MaterialThemeProvider>
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
