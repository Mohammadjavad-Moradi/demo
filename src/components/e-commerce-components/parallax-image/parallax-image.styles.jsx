import styled from 'styled-components';

export const TitleContainer = styled.div`
    height: 500px;
    position: relative;
    
`;

export const TitleText = styled(({...props}) => <div {...props} />)`
    font-family: Brush Script MT, Brush Script Std, cursive;
    color: white;
    font-style: italic;
    font-size: 4em;
    position: absolute;
    top: ${props => props.xs ? '60%' : '30%'};
    left: 20%;
    cursor: pointer;
`;