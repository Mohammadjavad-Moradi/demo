import styled from 'styled-components';

export const LinkContainer = styled.span`
    display: block;
    text-align: left;
    margin: 1em 0;
    padding-right: 1em;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    &:hover {
        color: ${props => props.theme.palette.button.main};
    }
`;

export const TabPanelContainer = styled.div`

`;