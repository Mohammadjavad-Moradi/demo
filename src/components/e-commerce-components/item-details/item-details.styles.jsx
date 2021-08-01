import styled from 'styled-components';

export const PageWrapper = styled(({...props}) => <div {...props} />)`
    display: flex;
    flex-direction: ${props => props.sm ? 'column' :'row' };
    align-items: ${props => props.sm ? 'center' : 'flex-start'};
`;