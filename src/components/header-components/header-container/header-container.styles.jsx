import styled from 'styled-components';
import { ReactComponent as Logo } from '../../../assets/maham.svg';
import headerImage from '../../../assets/header.png';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs'; 

export const HeaderBar = styled(({...props}) => <div {...props} />)`
    width: auto;
    height: ${props => props.xs ? '2em' : '5em'};
    background-size: cover;
    transition: height 1s ease-out;
`;

export const HeaderBarMobile = styled.div`
    width: 100%;

    background: rgb(36,112,171);
    background: linear-gradient(90deg, rgba(36,112,171,1) 0%, rgba(255,255,255,1) 0%, rgba(16,78,126,1) 0%, rgba(36,112,171,1) 40%, rgba(36,112,171,1) 60%, rgba(16,78,126,1) 100%);
 
`;

export const LogoContainer = styled(({...props}) => <Logo {...props} />)`
    width: ${props => props.xs ? '2.5em' : '5em'};
    height: ${props => props.xs ? '2.5em' : '5em'};
    padding: ${props => props.xs ? '.2em 10%' : '0 1em'};
    margin: ${props => props.xs ? '0 auto' : '0'};
    
    @keyframes appear {
        0% {
          letter-spacing: 1em;
          filter: blur(12px);
          opacity: 0;
        }
        100% {
          filter: blur(0px);
          opacity: 1;
        }
    }   
    animation: appear 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
let isComments = true;
const setValue = (value) => {
    if (value === 1 ) {   
        isComments = true;
    } else {
        isComments = false;
    }  
}

export const AppBarContainer = styled(({...props}) => <AppBar {...props} />)`
    
    ${props => setValue(props.value)}
    background-color: ${props => isComments ? props.theme.palette.secondary.charlestonGreen : props.theme.palette.secondary.charlestonGreen} !important;
    
    opacity: 95%;
    transition: background-color 2s ease-out;
`;

export const ToolBarContainer = styled(({...props}) => <Toolbar {...props} />)`
    min-height: ${props => props.xs ? '2em' : '5em'} !important;
    
    //color: ${props => props.theme.palette.primary.main};
    display: flex;
    justify-content: space-between;
`
export const OptionContainer = styled.div`
    display: flex;
`;

export const TabsContainer = styled(({...props}) => <Tabs indicatorColor='primary' {...props}/>)`
  
`;

export const TabContainer = styled(Tab)`
    && {
        min-width: auto;
        font-size: .8rem;
        padding: 0 .5em;
        margin-left: 10px;
        margin-right: 10px;
        height: 6em;
    }
`;

export const ProfileAndSearch = styled.div`
    display: flex;
    flex-direction: row;
    div {
        padding: 0;
    }
`;