import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { selectIsNewsDataFetching, selectIsNewsDataLoaded, selectPageSize } from '../../redux/temp-news-data/temp-news-data.selector';

import { fetchNewsDataStartAsync } from '../../redux/temp-news-data/temp-news-data.actions';

import Spinner from '../../components/spinner/spinner.component';
import WithSpinner from '../../components/withSpinner/withSpinner.component';

const OfficialAnnouncement = lazy(() => import('../../components/official-announcment-list/official-announcement.component'))
const AnnoucementFullView = lazy(() => import('../../components/annoucement-full-view/annoucement-full-view.component'))

const OfficialAnnouncementWithSpinner = WithSpinner(OfficialAnnouncement);
const AnnoucementFullViewWithSpinner = WithSpinner(AnnoucementFullView);

const Announcements = ({ match, isFetching, fetchNewsDataStartAsync, isNewsDataLoaded, defaultPageSize }) => {
    React.useEffect(() => {
        const fetchingData = async () => {
            await fetchNewsDataStartAsync(match.params.category, defaultPageSize);
        }
        fetchingData();
    }, [fetchNewsDataStartAsync, match.params.category, defaultPageSize])

    return (
        <React.Fragment>
            <Suspense fallback={<Spinner />}>
                <Route exact path={`${match.path}`} render={props => (<OfficialAnnouncementWithSpinner {...props} isLoading={isNewsDataLoaded}/>)}/>
                <Route path={`${match.path}/:newsId`} render={props => (<AnnoucementFullViewWithSpinner {...props} isLoading={isFetching}/>)}/>
            </Suspense>
        </React.Fragment>
    )
}

const mapStateToProps = (state, ownProps) => ({
    isFetching: selectIsNewsDataFetching(state),
    isNewsDataLoaded: selectIsNewsDataLoaded(ownProps.match.params.category)(state),
    defaultPageSize: selectPageSize(state)
})

const mapDispatchToProps = dispatch => ({
    fetchNewsDataStartAsync: (collectionName, pageSize) => dispatch(fetchNewsDataStartAsync(collectionName, pageSize))
});

export default connect(mapStateToProps, mapDispatchToProps)(Announcements);