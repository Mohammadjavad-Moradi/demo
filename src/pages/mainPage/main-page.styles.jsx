import styled from 'styled-components';



export const MainContainer = styled.main`
    /* background: linear-gradient(180deg, rgba(16,78,126,1) 6%, rgba(226,226,226,1) 14%, rgba(226,226,226,1) 86%, rgba(66,66,66,1) 100%); */
    background-color: ${props => props.theme.palette.secondary.light};
`;

export const PageContainer = styled(({...props}) => <div {...props} />)`
    width: 80vw;
    margin: 10px auto;
    background-color: ${props => props.theme.palette.common.white};

    ${props => props.theme.breakpoints.down('sm')} {
        width: 100%;
    }
`;