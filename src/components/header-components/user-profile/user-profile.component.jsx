import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signOutStart } from '../../../redux/user/user.actions';

import ShoppingCard from '../../e-commerce-components/shopping-card/shopping-card.component';

import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { UserProfileWrapper, ButtonGroupContainer, ProfileName } from './user-profile.styles';


const UserProfile = ({currentUser, history, signOutStart}) => {
    const toShoppingBag = () => {
        history.push('/ecommerce/shoppingbag')
    }
    const handleClick = () => {
        signOutStart();
    }

  return (
        <UserProfileWrapper>      
            <ButtonGroupContainer variant="outlined" aria-label="profile buttons">
                <ProfileName ><AccountCircle fontSize="small"/></ProfileName>
                <ProfileName onClick={() => toShoppingBag()}><ShoppingCard fontSize="small"/></ProfileName>
                <Button
                    size="small"
                    aria-label="sign out button"
                    aria-haspopup="menu"
                    onClick={() => handleClick()}
                >
                    <ExitToAppIcon fontSize="small"/>
                </Button>
            </ButtonGroupContainer>
        </UserProfileWrapper>
  );
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));