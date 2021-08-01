import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';

export const FooterContainer = styled.div`
    background-color: ${props => props.theme.palette.secondary.main};
    width: 100% !important;
`;

export const PaperContainer = styled(({...props}) => <Paper elevation={0} {...props}/>)`
    background-color: ${props => props.theme.palette.secondary.main} !important;
    color: ${props => props.theme.palette.common.white} !important;
    text-align: center;
    padding: 1em 1em;
`;