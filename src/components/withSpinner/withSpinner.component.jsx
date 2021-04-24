import React from 'react';

import { SpinnerOverlay, LogoSpinner } from './withSpinner.styles';

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
    return isLoading ?
        (
            <SpinnerOverlay>
                <LogoSpinner />
            </SpinnerOverlay>
        )
        :
        (<WrappedComponent {...otherProps} />)

}

export default WithSpinner;