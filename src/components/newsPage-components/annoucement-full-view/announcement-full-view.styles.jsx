import styled from 'styled-components';

import Divider from '@material-ui/core/Divider';

export const NewsContainer = styled.div`
    overflow: hidden;
`;

export const NewsTitle = styled.div`

    @keyframes moveintop {
        0% {
            transform: translateY(-100%);
            opacity: 0;
        }

        100% {
            transform: translateY(0%);
            opacity: 1;
        }
    }

    text-align: left;
    padding: 1em;
    font-weight: bold;
    animation: 1s ease-out 0s moveintop;
`;

export const DividerContainer = styled(({...props}) => <Divider variant='middle' {...props}/>)`

    @keyframes moveindivider {
        0% {
            transform: translateX(-100%);
        }

        100% {
            transform: translateX(0%);
        }
    }

    height: 2px !important;
    opacity: .6;
    background-color: ${props => props.theme.palette.primary.light} !important;
    animation: 1s ease-out 0s moveindivider;
`;

export const MainImageWrapper = styled(({...props}) => <div {...props} />)`
    width: ${props => props.matches ? '90%' : '50%'};
    height: 300px;
    margin: 2em auto;
`;

export const MainImage = styled.div`

    @keyframes fadein {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props => props.url});
    animation: 1s ease-in 0s fadein;
`;

export const Content = styled(({...props}) => <div {...props} />)`
    text-align: left;
    line-height: 2em;
    padding: 2em;
    animation: 1s ease-in 0s fadein;
`;

export const ImagesContainer = styled.div`
    width: 90%;
    margin: 1em auto;
`;

export const DateContainer = styled(({...props}) => <div {...props} />)`
    padding: 1em;
    text-align: left;
    
    @keyframes moveInBottom {
        0% {
            transform: translateY(200%);
            opacity: 0;
        }
        100% {
            transform: translateY(0%);
            opacity: 1;
        }
    }

    animation: 1s ease-out 0s moveInBottom;

`;