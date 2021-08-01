import styled from 'styled-components';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export const VerticalTabsContainer = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: row;
`;

export const TabsContainer = styled(({ ...props }) => <Tabs orientation="vertical" variant="scrollable" indicatorColor='primary' textColor="primary" {...props} />)`
    display: flex;
    flex-direction: row;
    border-right: 1px solid ${props => props.theme.palette.divider};
    height: 360px;
    width: 20%;
    
`;

export const TabContainer = styled(Tab)`
    font-size: .8em !important;
    font-weight: bold !important;
    min-width: 100% !important;
`;

export const TabPanelContainer =  styled.div`
    height: 360px;
    overflow-y: auto;
    width: 80%;
    

    @keyframes fadein {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    animation: 1s ease-in 0s fadein;
`;

export const LinkContainer = styled.span`
    display: block;
    text-align: left;
    padding: .6em;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    &:first-child {
        margin-top: 0;
    }
    &:hover {
        color: ${props => props.theme.palette.button.main};
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    margin-top: 1em;
    flex-direction: row-reverse;
`;