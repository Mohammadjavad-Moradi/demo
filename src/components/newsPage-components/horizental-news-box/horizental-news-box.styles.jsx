import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';

export const NewsContainer = styled.div`
   
    background-color: ${props => props.theme.palette.grey[400]};
`;

export const NewsBox = styled(Box)`
    margin: 20px auto;
    width: 90%;
    padding-bottom: 20px; 
`;

export const GridContainer = styled(({ ...props }) => <Grid {...props} />)`
    
`;

export const CardContainer = styled(({ ...props }) => <Card {...props} />)`
    height: auto;
    width: 100%;
    margin: 20px auto;
    
`;

export const CardActionAreaContainer = styled(CardActionArea)`
    padding: 1em !important;
    display: flex !important;
    flex-direction: row !important;
    justify-content: left !important;
`;

export const CardMediaContainer = styled(CardMedia)`
    height: 100px;
    min-width: 20%;

`;

export const CardContentContainer = styled(CardContent)`
    width: 80%;
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Titles = styled.div`
    font-weight: bold;
    font-size: 1.1em;
    padding: .5em;
`;

export const Content = styled.div`
    padding: .5em;

`;

export const DateContent = styled.div`
    padding: .5em;
    font-size: .7em;
    color: ${props => props.theme.palette.grey[400]};
`;