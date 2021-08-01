import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { LinkContainer, TitleContainer, TabPanelContainer } from './horizontal-tabs.styles';

import { createStructuredSelector } from 'reselect';
import { selectTitles, selectLinkUrls, selectPreviews } from '../../../redux/announcements/announcements.selector';

import CustomButton from '../../atom-components/custom-button/custom-button.component';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <TabPanelContainer
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </TabPanelContainer>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}



const HorizontalTabs = ({ title, linkUrl, preview, history }) => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div>
            <TitleContainer>
                <span>اعلانات</span>
            </TitleContainer>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    {
                        title.map((item, index) => (
                            <Tab label={item} key={index} {...a11yProps(index)} />
                        ))
                    }
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                {
                    preview.map((panel, i) => (
                        <TabPanel value={value} index={i} dir={theme.direction} key={i}>
                            {
                                panel.map((item, id) => (
                                    <LinkContainer key={id} onClick={() => history.push(`${linkUrl[i]}/${item.id}`)}>{item.title}</LinkContainer>
                                ))
                            }
                            <CustomButton variant='contained' color='secondary' component='link' to={linkUrl[i]} >ادامه مطلب</CustomButton>
                        </TabPanel>
                    ))
                }
            </SwipeableViews>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    title: selectTitles,
    linkUrl: selectLinkUrls,
    preview: selectPreviews
})

export default withRouter(connect(mapStateToProps)(HorizontalTabs));