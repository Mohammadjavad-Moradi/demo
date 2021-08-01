import styled from 'styled-components';

export const ProfileContainer = styled(({...props}) => <div {...props} />)`
    text-align: center;
    line-height: ${props => props.xs ? '3em' : '5em'};
`;

export const ProfileName = styled.div`
    
    font-size: .8rem;
    font-weight: 500;
    span {
        cursor: pointer;
    }
`;