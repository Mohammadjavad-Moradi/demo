import styled from 'styled-components';

import Carousel from 'react-material-ui-carousel';
import Paper from '@material-ui/core/Paper';

export const PayamBankContainer = styled(({...props}) => <Carousel autoPlay={false} indicators={false} navButtonsAlwaysVisible={true} {...props} />)`
    background-image: linear-gradient(to right, #243949 0%, #517fa4 100%);
    height: 450px;
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