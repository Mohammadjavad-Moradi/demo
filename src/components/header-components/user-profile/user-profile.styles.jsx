import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export const UserProfileWrapper = styled.div`
    display: flex;
`;

export const ButtonGroupContainer = styled(({...props}) => <ButtonGroup {...props} />)`
    margin-top: .4em;
    position: relative;
    height: 2em;
    span {
        color: white !important;
    }
    button {
        
        border-color: white !important;
    }
`;

export const ProfileName = styled(({...props}) => <Button {...props} />)`
    font-size: .3em !important;
    padding: 0;
    color: white;
`;