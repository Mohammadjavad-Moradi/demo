import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import MainPage from './pages/mainPage/main-page.component';
import ErrorBoundary from './components/atom-components/error-boundary/error-boundary.component';

import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from './theme';

import WithSpinner from './components/atom-components/withSpinner/withSpinner.component';

import { checkUserSession } from './redux/user/user.actions';
import { getInitialAnnouncementsStart } from './redux/announcements/announcements.actions';
import { fetchHeaderDataStart } from './redux/header/header.actions';

const MainPageWithSpinner = WithSpinner(MainPage);

function App ({ getInitialAnnouncementsStart, fetchHeaderDataStart, checkUserSession, headerFetched, announcementsFetched }) {
  useEffect(() => {
    checkUserSession()
    fetchHeaderDataStart();
    getInitialAnnouncementsStart();
  },[checkUserSession, fetchHeaderDataStart, getInitialAnnouncementsStart]);
  
  return (
    <MaterialThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <ErrorBoundary>
          <MainPageWithSpinner isLoading={headerFetched && announcementsFetched ? false : true} />
        </ErrorBoundary>
      </StyledThemeProvider>
    </MaterialThemeProvider>
  );
}

const mapStateToProps = state => ({
  headerFetched: state.header.fetched,
  announcementsFetched: state.announcements.fetched
})

const mapDispatchToProps = dispatch => ({
  fetchHeaderDataStart: header => dispatch(fetchHeaderDataStart(header)),
  checkUserSession: () => dispatch(checkUserSession()),
  getInitialAnnouncementsStart: () => dispatch(getInitialAnnouncementsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);