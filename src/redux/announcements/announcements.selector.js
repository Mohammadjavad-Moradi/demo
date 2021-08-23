import { createSelector } from 'reselect';

const selectAnnouncements = state => state.announcements.announcementsData;
const selectSpecialAnnouncements = state => state.announcements.announcementsData.special;

export const selectSpecialTitle = createSelector(
    [selectSpecialAnnouncements],
    special => special.title
)

export const selectSpecialLinkUrl = createSelector(
    [selectSpecialAnnouncements],
    special => special.linkUrl
)

export const selectSpecialPreview = createSelector(
    [selectSpecialAnnouncements],
    special => special ? Object.keys(special.content).map(key => special.content[key]).slice(0, 4) : []
);

export const selectTitles = createSelector(
    [selectAnnouncements],
    announcements => Object.keys(announcements).map(key => announcements[key].title)
)

export const selectLinkUrls = createSelector(
    [selectAnnouncements],
    announcements => Object.keys(announcements).map(key => announcements[key].linkUrl)
)

export const selectPreviews= createSelector(
    [selectAnnouncements],
    announcements => {
        const contents = Object.keys(announcements).map(key => announcements[key].content)
        return contents.map(item => Object.keys(item).map(key => item[key]).slice(0, 6))
    }
);

export const selectFullData = params => 
    createSelector(
        [selectAnnouncements],
        announcements => announcements[params.category].content[params.newsId]
    );

export const selectList = category => 
    createSelector(
        [selectAnnouncements],
        announcements => Object.keys(announcements[category].content).map(key => announcements[category].content[key])
    )

export const selectTitle = category =>
    createSelector(
        [selectAnnouncements],
        announcements => announcements[category].title
    )

export const selectAll = createSelector(
    [selectAnnouncements],
    announcements => announcements ? Object.keys(announcements).map(key => announcements[key]) : []
)