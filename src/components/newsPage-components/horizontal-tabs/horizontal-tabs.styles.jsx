import styled from 'styled-components';

export const LinkContainer = styled.span`
    display: block;
    text-align: right;
    margin: 1em 0;
    padding-right: 1em;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    &:hover {
        color: ${props => props.theme.palette.button.main};
    }
`;

export const TitleContainer = styled.div`
    width: 100%;
    background-color: ${props => props.theme.palette.secondary.main};
    color: ${props => props.theme.palette.common.white};
    font-weight: bold;
    text-align: right;
    line-height: 3em;
    cursor: default;
    span {
        padding: 1em;
    }
`;

export const TabPanelContainer = styled.div`

`;