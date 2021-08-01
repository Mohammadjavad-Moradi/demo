import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

export const TitleBar = styled(({ ...props }) => <Grid container direction='column' alignItems='flex-start' {...props} />)`
    width: 100%;
    background-color: ${props => props.color === 'grey' 
        ? props.theme.palette.secondary.main 
        : props => props.theme.palette.primary.main};
    color: ${props => props.theme.palette.common.white};
    line-height: 3em;
    text-align: left;
`;

export const TitleNameLink = styled(Link)`
    font-weight: bold;
    padding-left: 1em;
    text-decoration: none;
    color: inherit;
    &:visited {
        text-decoration: none;
        color: inherit;
    }
    &:hover {
        color: ${props => props.theme.palette.button.main};
    }
`;

export const TitleName = styled.span`
    padding-left: 1em;
    cursor: default;
    font-weight: bold;
`;