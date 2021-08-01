import styled from 'styled-components';



export const MainContainer = styled.main`
    background-color: ${props => props.theme.palette.secondary.light};
`;

export const PageContainer = styled(({...props}) => <div {...props} />)`
    margin: ${props => props.xs ? '0 auto' : '5em auto 0'};
    padding-top: 0;
    background-color: ${props => props.theme.palette.common.white};

    ${props => props.theme.breakpoints.down('sm')} {
        width: 100%;
    }
`;