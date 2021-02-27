import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import Select from '@material-ui/core/Select';

export const PageContainer = styled(({...props}) => <div {...props}/>)`
    width: 100%;
`;

export const ItemContainer = styled(({...props}) => <Grid {...props} container direction="row-reverse" justify="space-between"/>)`
    padding: 1em;
`;

export const ListItem = styled(({...props}) => <Grid {...props} item />)`
    font-weight: ${props => props.title ? 'bold' : 'normal'};
    max-width: ${ props => props.title ? '80%' : '20%'};
    text-align: right;
    font-size: ${ props => props.title ? '.9rem' : '.7rem'};
    color: ${ props => props.title ? props.theme.palette.grey[900] : props.theme.palette.grey[800] };

    &:visited {
        text-decoration: none;
        color: inherit;
    }
    &:hover {
        color: ${props => props.theme.palette.button.main};
    }
`;

export const PageIndicator = styled(({...props}) => <Pagination count={10} color='primary' showFirstButton showLastButton {...props} />)`
    ul {
        justify-content: center;
    }
    padding: 1em;
    position: relative;
`;

export const FormControlContainer = styled.div`
    padding: 10px;
    width: 80px;
    margin: 0 auto;
`;

export const SelectContainer = styled(Select)`
    width: 80px;
    height: 40px;
`;
