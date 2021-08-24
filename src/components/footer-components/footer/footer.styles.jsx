import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';

export const FooterContainer = styled.div`
    background-color: ${props => props.theme.palette.secondary.main};
    width: 100% !important;
`;

export const PaperContainer = styled(({...props}) => <div elevation={0} {...props}/>)`
    background-color: #243b55 !important;
    color: #00f8ae !important;
    text-align: center;
    padding: 1em 1em;
`;