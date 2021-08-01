import styled from 'styled-components';

export const AlertBox = styled.div`
    text-align: center;
    width: 100%;
    height: 70vh;
    font-size: 2em;
    font-weight: bold;
    line-height: 60vh;
`;

export const Wrapper = styled(({...props}) => <div {...props} />)`
    display: flex;
    flex-direction: ${props => props.sm ? 'column' : 'row-reverse'};
    
`;

export const ShoppingItemsWrapper = styled.div`
    flex-grow: 1;
`;