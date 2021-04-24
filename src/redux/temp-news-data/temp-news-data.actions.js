import tempNewsDataActionTypes from './temp-news-data.types';

import { firestore, getPageData } from '../../firebase/firebase.utils';

export const fetchNewsDataStart = () => ({
    type: tempNewsDataActionTypes.FETCH_NEWS_DATA_START
});

export const fetchNewsDataSuccess = fullData => ({
    type: tempNewsDataActionTypes.FETCH_NEWS_DATA_SUCCESS,
    payload: fullData
})

export const fetchNewsDataNextPageSuccess = fullData => ({
    type: tempNewsDataActionTypes.FETCH_NEWS_DATA_NEXT_PAGE,
    payload: fullData
})

export const fetchNewsDataFailure = errorMessage => ({
    type: tempNewsDataActionTypes.FETCH_NEWS_DATA_FAILURE,
    payload: errorMessage
})

export const fetchNewsDataStartAsync = (collectionName, pageSize) => {
    console.log(collectionName, pageSize)
    return async dispatch => {
        const getAllRef = firestore.collection(`announcements/${collectionName}/contents`);
        const count = await getAllRef.get().then(res => {
            return res.size
        })
        const first = firestore.collection(`announcements/${collectionName}/contents`).orderBy('time', 'desc').limit(pageSize);
        dispatch(fetchNewsDataStart());
        first.get().then( snapshot => {
            const newsData = getPageData(snapshot)
            const fullData = { newsData, count, pageSize, collectionName }
            dispatch(fetchNewsDataSuccess(fullData)) 
        }).catch(error => dispatch(fetchNewsDataFailure(error.message)))             
    }
}

export const fetchNextNewsDataStartAsync = (collectionName, limit, firstItemIndex, nextPageIndicator, pageSize) => {
    return dispatch => {
        console.log('data request')
        const lastPage = nextPageIndicator-1;
        const nextPage = nextPageIndicator+1;
        const firstIndex = lastPage*pageSize-pageSize+1;
        const lastIndex = nextPage*pageSize;
        const first = firestore.collection(`announcements/${collectionName}/contents`).orderBy('time', 'desc').limit(firstItemIndex);
        dispatch(fetchNewsDataStart());
        first.get().then( snapshot => {
            const firstItem = snapshot.docs[snapshot.docs.length-1];
            const next = firestore.collection(`announcements/${collectionName}/contents`).orderBy('time', 'desc').startAt(firstItem).limit(limit);
            next.get().then( newsnapshot => {
                const newsData = getPageData(newsnapshot);
                const fullData = {newsData, nextPageIndicator, firstIndex, lastIndex};

                dispatch(fetchNewsDataNextPageSuccess(fullData))
            }).catch(error => dispatch(fetchNewsDataFailure(error.message))) 
        })

    }
}
// export const fetchNewsDataNextPageStartAsync = (collectionName, lastItem, pageSize, nextPageIndicator) => {
//     console.log(`page size recieved ${pageSize}`)
//     return dispatch => {
//         dispatch(fetchNewsDataStart());      
//         const next = firestore.collection(`announcements/${collectionName}/contents`).orderBy('time', 'desc').startAfter(lastItem.time).limit(pageSize)
//         next.get().then( nextData => {
//             const data = getPageData(nextData)
//             const fullData = { data, nextPageIndicator, pageSize}
//             dispatch(fetchNewsDataNextPageSuccess(fullData))
//         }).catch(error => dispatch(fetchNewsDataFailure(error.message)))
//     }
// }

// export const fetchNewsDataChangePageStartAsync = (collectionName, pageSize) => {
//     return async dispatch => {
//         const getAllRef = firestore.collection(`announcements/${collectionName}/contents`);
//         const count = await getAllRef.get().then(res => {
//             return res.size
//         })
//         const first = firestore.collection(`announcements/${collectionName}/contents`).orderBy('time', 'desc').limit(pageSize);
//         dispatch(fetchNewsDataStart());
//         first.get().then( snapshot => {
//             const newsData = getPageData(snapshot)
//             const fullData = { newsData, count }
//             dispatch(fetchNewsDataSuccess(fullData)) 
//         }).catch(error => dispatch(fetchNewsDataFailure(error.message)))             
//     }
// }


// export const fetchNewsDataPreviousPageStartAsync = (collectionName, pageSize, previousPageIndicator) => {
//     console.log(previousPageIndicator)
//     return dispatch => {
//         const first = firestore.collection(`announcements/${collectionName}/contents`).orderBy('time', 'desc').limit(pageSize);
//         dispatch(fetchNewsDataStart());
//         first.get().then( snapshot => {
//             const firstVisible = snapshot.docs[0];
            
//             const next = firestore.collection(`announcements/${collectionName}/contents`).orderBy('time', 'desc').startAfter(lastVisible).limit(pageSize)
//             next.get().then( nextData => {
//                 //console.log(nextData)
//                 const data = getPageData(nextData)
//                 const fullData = { data, nextpageIndicator}
//                 dispatch(fetchNewsDataNextPageSuccess(fullData))
//             });
//         }).catch(error => dispatch(fetchNewsDataFailure(error.message)))
//     }
// }