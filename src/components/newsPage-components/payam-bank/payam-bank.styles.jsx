import styled from 'styled-components';

import cbi from '../../../assets/payam-bank.png';

import Carousel from 'react-material-ui-carousel';
import Paper from '@material-ui/core/Paper';

export const PayamBankContainer = styled(({...props}) => <Carousel autoPlay={false} indicators={false} navButtonsAlwaysVisible={true} {...props} />)`
    background-color: ${props => props.theme.palette.primary.light};
    height: 450px;
    background: url(${cbi}) top left;
    background-size: cover;

    button {
        background-color: transparent !important;
        color: ${props => props.theme.palette.common.white};

        &:hover {
            background-color: ${props => props.theme.palette.secondary.dark} !important;
            color: ${props => props.theme.palette.common.white} !important;
        }
    }

`;

export const PayamSlides = styled(({...props}) => <Paper elevation={0} {...props} />)`
    background-color: transparent !important;
    width: 90%;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;