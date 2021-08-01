import styled from 'styled-components';

export const BoxWrapper = styled(({...props}) => <div {...props} />)`
    width: ${props => props.sm ? '95vw' : '30vw'};
`;

export const NameContainer = styled.div`
    font-size: 1.2em;
    font-weight: bold;
    font-style: italic;
    margin: 1em .3em 2em;
`;

export const PriceContainer = styled.div`
    margin: 1em .3em 2em;
    font-weight: bold;
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em;
`;

export const DescriptionTitle = styled.div`
    font-family: Brush Script MT, Brush Script Std, cursive;
    font-size: 1.5em;
    font-weight: bold;
    margin: .3em;
`;

export const DescriptionText = styled.p`
    font-size: .8em;
`;

export const SpecContainer = styled.ul`
    li {
        font-size: .8em;
    }
`;