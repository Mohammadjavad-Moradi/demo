import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import MainPage from './pages/mainPage/main-page.component';

import { firestore, auth, createUserProfile, getAnnouncementsData, getHeaderData } from './firebase/firebase.utils';

import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from './theme';

import WithSpinner from './components/withSpinner/withSpinner.component';

import { setCurrentUser } from './redux/user/user.actions';
import { initialAnnouncements } from './redux/announcements/announcements.actions';
import { setHeaderData } from './redux/header/header.actions';

const MainPageWithSpinner = WithSpinner(MainPage);

function App ({ setCurrentUser, initialAnnouncements, headerData, setHeaderData }) {
  const [loadingAnnouncements, setloadingAnnouncements] = React.useState(true);
  const [loadingHeader, setloadingHeader] = React.useState(true);
  const [loading, setLoading] = React.useState(true);


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

    const loadingState = () => {
      loadingAnnouncements && loadingHeader ? setLoading(false) : setLoading(true);
    }

    const fetchHeaderData = async () => {
      const collectionRef = await firestore.collection('header').get();
      const data = await getHeaderData(collectionRef);
      setHeaderData(data);
      setloadingHeader(false);
      
    }
    fetchHeaderData();

    const fetchAnnouncementsData = () => {
      const collectionRef = firestore.collection('announcements');
      collectionRef.onSnapshot( async snapshot => {       
        const initialData = await getAnnouncementsData(snapshot);
        initialAnnouncements(initialData);
        setloadingAnnouncements(false);
        loadingState();
      }) 
    }
    fetchAnnouncementsData()
    
    return function cleanUp() {
      unSubscribeFromAuth();
    }    
  },[])
  
  
  return (
    <MaterialThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <MainPageWithSpinner isLoading={loading} />
        { 
        /* <MainContainer>
          <HeaderContainer/>
          <PageContainer>
            <Switch>
              <Route exact path='/' render={(props) => <HomePageWithSpinner isLoading={loading} {...props} />} />
              <Route path='/announcements/:category' render={(props) => <AnnouncementsWithSpinner isLoading={loading} {...props} />} />
              <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInPage/>) } />
            </Switch>
          </PageContainer>
          <Footer />
        </MainContainer> */}
      </StyledThemeProvider>
    </MaterialThemeProvider>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  initialAnnouncements: announcements => dispatch(initialAnnouncements(announcements)),
  setHeaderData: header => dispatch(setHeaderData(header))
});

export default connect(null, mapDispatchToProps)(App);
