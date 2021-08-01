import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export const SummaryContainer = styled(({...props}) => <Card variant="outlined" {...props} />)`
    ${ props => props.sm ? null : `border: 1px solid black !important;` }
    width: ${ props => props.sm ? 'auto' : '300px'};
    height: 350px;
    margin: 1em;
`;

export const SummaryContent = styled(({...props}) => <CardContent {...props} />)`
    margin: 1em;
`;

export const TotalTitle = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Title = styled.div`
    text-align: center;
    font-size: 1.5em;
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
`;
