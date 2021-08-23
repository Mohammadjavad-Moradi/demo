import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import UserProfile from '../user-profile/user-profile.component';

import { Wrapper, ProfileContainer, ProfileName } from './profile.styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


const Profile = ({ currentUser, history }) => {
    const theme = useTheme();
    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));

    const handleClick = () => {
        history.push('/signin')
    }

    return (
        <Wrapper>
            {
                currentUser ?
                    <UserProfile />
                :  
                <ProfileContainer xs={matchesXs ? 'true' : undefined}>                 
                    <ProfileName onClick={() => handleClick()}>
                        <span>SIGN IN</span>
                    </ProfileName>
                </ProfileContainer> 
            }
        </Wrapper>
    )
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default withRouter(connect(mapStateToProps)(Profile));