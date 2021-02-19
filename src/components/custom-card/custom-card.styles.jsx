import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

export const CardContainer = styled(Card)`
    width: 250px;
    margin-top: 20px;
    height: 370px;

`;

export const CardMediaContainer = styled(CardMedia)`
    height: 150px;
`;

export const CardActionAreaContainer = styled(CardActionArea)`
    text-align: right !important;
`;