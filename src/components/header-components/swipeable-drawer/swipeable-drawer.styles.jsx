import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';

export const LinkDrawer = styled.div`
    text-decoration: none;
    color: inherit;
    &:visited {
        text-decoration: none;
        color: inherit;
    }
`;

export const ListItemIconContainer = styled(ListItemIcon)`
    justify-content: flex-end;
`;

export const IconBottonContainer = styled(IconButton)`
    color: ${props => props.theme.palette.common.white} !important;
`;

export const ArrowBackIcon = styled(({...props}) => <ArrowBackOutlinedIcon color='action' fontSize="small" {...props} />)`

`;

export const ArrowForwardIcon = styled(({...props}) => <ArrowForwardIosOutlinedIcon color='action' fontSize="small" {...props}/>)`

`;

export const ListContainer = styled.div`
    display: flex;
    
    position: relative;
    overflow: hidden;
    overflow-y: scroll;
    height: 100%;
`;

export const BackButton = styled.div`
    font-weight: bold;
    font-size: 1.1rem;
`;

export const FirstList = styled(({...props}) =>  <List {...props} />)`
    position: relative;
    min-width: 100%;
    left: ${props => !props.open ? '0' : '-110%'};
    transition: all ease 0.6s;

    div {
        text-align: left;
    }
`;

const openDrawers = (props) => {
    if(props.open && props.indexvalue === props.value && !props.isopen) {
        return '0'
    } 
    if(props.open && props.isopen === 'true') {
        return '-200%'
    }   
    return '100%'
}

const openSecondDrawer = (props) => {
    if(props.isopen && props.secondindexvalue === props.value) {
        return '0'
    } else {
        return '100%'
    }
}

export const SecondList = styled(({...props}) => <List {...props} />)`
    position: absolute !important;
    width: ${props => props.open && props.indexvalue === props.value ? '240px' : '240px'} !important;
    visibility: ${props => props.open && props.indexvalue === props.value ? 'visible' : 'hidden' };
    left: ${props => openDrawers(props)};
    transition: left ease .6s;

    div {
        text-align: left;
    }
`;

export const ThirdList = styled(({...props}) => <List {...props} />)`
    min-width: 240px;
    position: absolute !important;
    left: ${props => openSecondDrawer(props)};  
    transition: all ease .6s;

    div {
        text-align: left;
    }
`;

