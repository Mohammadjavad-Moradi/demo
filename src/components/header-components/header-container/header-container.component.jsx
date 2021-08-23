import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectQuickLinks } from '../../../redux/header/header.selectors';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { HeaderBar,
    LogoContainer, 
    AppBarContainer, 
    ToolBarContainer, 
    OptionContainer,
    TabContainer, 
    TabsContainer, 
    ProfileAndSearch,
    HeaderBarMobile 
} from './header-container.styles';

import Profile from '../profile/profile.component';
import SwipeableTemporaryDrawer from '../swipeable-drawer/swipeable-drawer.component';
import QuickLinksSlider from '../quick-links-slider/quick-links-slider.component';

const HeaderContainer = ({ quickLinks }) => {

    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));
    
    const [value, setValue] = useState(0);

    useEffect(() => {
        quickLinks.content.map((item, index) => {
                if (item.linkUrl === window.location.pathname) {
                    return setValue(index);
                }
            }) 
    },[quickLinks.content])

    const handleChange = (event, value) => {
        setValue(value);
    }


    const tabs = (
        <ToolBarContainer xs={matchesXs ? 'true' : undefined} disableGutters>
            <OptionContainer>    
                <HeaderBar value={value} xs={matchesXs ? 'true' : undefined}>
                    <Link to='/'>
                        <LogoContainer value={value} onClick={() => setValue(0)} xs={matchesXs ? 'true' : undefined}/>
                    </Link>
                </HeaderBar>
                <SwipeableTemporaryDrawer/>
                <TabsContainer value={value} onChange={handleChange}>
                    {
                        matchesXs ?
                        null
                        :
                        quickLinks.content.map((item, index) => (
                            <TabContainer key={index} label={item.title} component={Link} to={item.linkUrl}/>
                            ))
                        }                  
                </TabsContainer>
            </OptionContainer>
            <OptionContainer>            
                <Profile/>                
            </OptionContainer>
            
        </ToolBarContainer>
    )

    return (
        <React.Fragment>
            <AppBarContainer value={value} position={ matchesXs ? 'static' : "fixed"}>       
                { tabs }
            </AppBarContainer>
            {
                matchesXs ? <QuickLinksSlider titleData={quickLinks} /> : null 
            }
        </React.Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    quickLinks: selectQuickLinks
})

export default connect(mapStateToProps)(HeaderContainer);