import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectIsNewsDataFetching, selectIsNewsDataLoaded, selectPageSize, selectCategory } from '../../redux/temp-news-data/temp-news-data.selector';

import { fetchNewsDataStartAsync, fetchNewsDataStart } from '../../redux/temp-news-data/temp-news-data.actions';

import OfficialAnnouncement from '../../components/official-announcment-list/official-announcement.component';
import AnnoucementFullView from '../../components/annoucement-full-view/annoucement-full-view.component';
import WithSpinner from '../../components/withSpinner/withSpinner.component';

const OfficialAnnouncementWithSpinner = WithSpinner(OfficialAnnouncement);
const AnnoucementFullViewWithSpinner = WithSpinner(AnnoucementFullView);

const Announcements = ({ match, isFetching, fetchNewsDataStartAsync, isNewsDataLoaded, defaultPageSize }) => {
    React.useEffect(() => {
        const fetchingData = async () => {
            await fetchNewsDataStartAsync(match.params.category, defaultPageSize);
        }
        fetchingData();
    }, [fetchNewsDataStartAsync, match.url, defaultPageSize])

    return (
        <React.Fragment>
            <Route exact path={`${match.path}`} render={props => (<OfficialAnnouncementWithSpinner {...props} isLoading={!isNewsDataLoaded}/>)}/>
            <Route path={`${match.path}/:newsId`} render={props => (<AnnoucementFullViewWithSpinner {...props} isLoading={isFetching}/>)}/>
        </React.Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsNewsDataFetching,
    isNewsDataLoaded: selectIsNewsDataLoaded,
    defaultPageSize: selectPageSize
})

const mapDispatchToProps = dispatch => ({
    fetchNewsDataStartAsync: (collectionName, pageSize) => dispatch(fetchNewsDataStartAsync(collectionName, pageSize))
});

export default connect(mapStateToProps, mapDispatchToProps)(Announcements);