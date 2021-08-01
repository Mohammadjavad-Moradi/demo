import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CloseIcon from '@material-ui/icons/Close';

export const CardContainer = styled(({...props}) => <Card variant="outlined" {...props} />)`
    display: flex;
    margin: 1em;
    border: 1px solid black !important;
    flex-wrap: 1;
`;

export const CardContentContainer = styled(({...props}) => <CardContent {...props} />)`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
`;


export const ItemName = styled.div`
    font-size: 1em;
    font-weight: bold;
`;


export const CardMediaContainer = styled(({...props}) => <CardMedia {...props} />)`
    width: 250px;
    height: 250px;
`;

export const CloseIconContainer = styled(({...props}) => <CloseIcon {...props} />)`
    cursor: pointer;
`;