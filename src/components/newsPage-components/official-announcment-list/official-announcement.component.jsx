import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectTitle } from '../../../redux/announcements/announcements.selector';
import { selectNewsData, selectNewsDataCount, selectCurrentPage, selectPageSize, selectFirstIndex, selectLastIndex, selectCategory } from '../../../redux/temp-news-data/temp-news-data.selector';

import { PageContainer, FullListWrapper, Wrapper, ItemContainer, ListItem, PageIndicator, SelectContainer, FormControlContainer } from './official-announcement.styles';
import TitleContainer from '../../atom-components/title-container/title-container.component';

import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import { fetchNextNewsDataStartAsync, fetchNewsDataStartAsync } from '../../../redux/temp-news-data/temp-news-data.actions';

const OfficialAnnouncement = ({annuoncementList, announcementCount, currentPage, pageSizeNumber, firstIndex, lastIndex, title, currentCategory, history, match, fetchNextNewsDataStartAsync, fetchNewsDataStartAsync }) => {
    const [page, setPage] = React.useState(currentPage);
    const [pageSize, setPageSize] = React.useState(pageSizeNumber);
    
    // if (currentCategory !== match.params.category) {
    //     annuoncementList = []
    // }

    const pageCount = Math.ceil(announcementCount / pageSizeNumber);
    const handleClick = (id) => {
        history.push(`${match.url}/${id}`);
    }

    const checkForQuery = (pageNumber) => {
        const lastIndexNeeded = pageNumber*pageSize;
        const firstIndexNeeded = lastIndexNeeded-pageSize+1;

        if (lastIndexNeeded > lastIndex || firstIndexNeeded < firstIndex) {
            return true;
        } else { 
            return false;
        }
    }

    const handleChange = (event, value) => {
        const pagesToFetch = 3;
        let firstItemIndex = (value-2)*pageSize+1;
        if ( firstItemIndex < 1 ) {
            firstItemIndex = 1
        }
        const limit = pageSize*pagesToFetch;
        const collectionName = match.params.category;
        const check = checkForQuery(value);
        if ( check) {
            fetchNextNewsDataStartAsync(collectionName, limit, firstItemIndex, value, pageSize)
        }
        setPage(value);   
    }

    const handlePageSize = (event) => {
        fetchNewsDataStartAsync(match.params.category, event.target.value);
    };

    const pageToShow = (pageNumber) => {
        const lastIndexNeeded = pageNumber*pageSize;
        const firstIndexNeeded = lastIndexNeeded-pageSize+1;
        if (firstIndexNeeded === firstIndex ) {
            return 1;
        }
        if ( lastIndexNeeded === lastIndex ) {
            return 3;
        } else {
            return 2;
        }
    };

    const pagination = (myArray, pageNumber, pageSize) => {
        const pageIndex = pageToShow(pageNumber);
        switch (pageIndex) {
            case 1:
                return myArray.slice(0, pageSize);
            case 2: 
                return myArray.slice(pageSize, pageSize*2);  
            case 3: 
                return myArray.slice(pageSize*2, myArray.length);
            default: 
                return myArray;
        }
    }
    
    return (
        <PageContainer>
            <TitleContainer name={title} color='blue' />
            <Wrapper>
                <FullListWrapper>
                    {
                        pagination(annuoncementList, page, pageSize).map((item, index) => (
                            <React.Fragment key={index}>
                                <ItemContainer >
                                    <ListItem onClick={() => handleClick(item.id) } title={'true'} >{item.title}</ListItem>
                                    <ListItem onClick={() => handleClick(item.id) } >{item.date}</ListItem>
                                </ItemContainer>
                                <Divider variant="middle"/>
                            </React.Fragment>
                        ))
                    }
                </FullListWrapper>
                    <PageIndicator page={page} count={pageCount} onChange={handleChange}/>           
                    <FormControlContainer>
                        <FormControl variant='outlined'>
                            <InputLabel id="demo-simple-select-label">Page Size</InputLabel>
                            <SelectContainer
                            labelId="demo-simple-select-outlined-label"
                            id="page-size"
                            value={pageSizeNumber}
                            onChange={handlePageSize}
                            label="Page Size"
                            >
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                            </SelectContainer>
                        </FormControl>
                    </FormControlContainer>
                
            </Wrapper>
        </PageContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    annuoncementList: selectNewsData(state),
    announcementCount: selectNewsDataCount(state),
    currentPage: selectCurrentPage(state),
    pageSizeNumber: selectPageSize(state),
    firstIndex: selectFirstIndex(state),
    lastIndex: selectLastIndex(state),
    title: selectTitle(ownProps.match.params.category)(state),
    currentCategory: selectCategory(state)
})

const mapDispatchToProps = dispatch => ({
    fetchNextNewsDataStartAsync: (collectionName, limit, firstItemIndex, value, pageSize) => dispatch(fetchNextNewsDataStartAsync(collectionName, limit, firstItemIndex, value, pageSize)),
    fetchNewsDataStartAsync: (collectionName, pageSize) => dispatch(fetchNewsDataStartAsync(collectionName, pageSize))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OfficialAnnouncement));