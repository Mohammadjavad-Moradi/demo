import React from 'react';

import SignIn from '../../components/authentication/sign-in/sign-in.component';

import { SignInPageWrapper } from './sign-in-page.styles';

const SignInPage = () => (
    <SignInPageWrapper>
        <SignIn />
    </SignInPageWrapper>
);

export default SignInPage;