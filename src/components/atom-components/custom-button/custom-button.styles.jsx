import styled from 'styled-components';

import Button from '@material-ui/core/Button';

export const StyledButton = styled(Button)`
    font-size: .8em !important;
    /* && {
        background-color: ${props => props.theme.palette.button.main};
        color: ${props => props.theme.palette.common.white};
        } */

    &:hover {
        color: ${props => props.theme.palette.button.main};
        font-weight: bold;
    }
`