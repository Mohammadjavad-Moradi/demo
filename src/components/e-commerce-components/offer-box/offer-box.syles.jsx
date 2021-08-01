import styled from 'styled-components';

export const ImageContainer = styled(({...props}) => <div {...props} />)`
    background: url(${props => props.sm ? '/assets/womens-hero-banner-mobile.jpg' : '/assets/womens-hero-banner-desktop1.jpg'});
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: ${props => props.sm ? 'left' : 'center'} top;
    min-height: 700px;
    position: relative;

`;

export const OfferTitle = styled(({...props}) => <div {...props} />)`
    color: ${props => props.xs ? 'black' : 'white' };
    font-weight: bold;
    font-size: 4em;
    font-family: Brush Script MT, Brush Script Std, cursive;
    position: absolute;
    top: 30%;
    right: 15%;
`;