import styled from 'styled-components';
import { Link } from 'react-router-dom';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


export const SlideWrapper = styled(({...props}) => <GridListTile {...props} />)`
    list-style: none;;
    overflow: hidden;
    
    
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

export const GridListContainer = styled(({...props}) => <GridList  {...props} />)`
    flex-wrap: nowrap !important;
    justify-content: space-around;
    flex-direction: row;
    transform: translateZ(0);
    background: rgb(36,112,171);
    background: linear-gradient(90deg, rgba(36,112,171,1) 0%, rgba(255,255,255,1) 0%, rgba(16,78,126,1) 0%, rgba(36,112,171,1) 40%, rgba(36,112,171,1) 60%, rgba(16,78,126,1) 100%);
    li {
        width: auto !important;
        line-height: 3em;
    }   
`;

export const GridListTileContainer = styled(GridListTile)`
    height: 3em !important;
`;


export const LinkContainer = styled(Link)`
    width: 100px;
    color: ${props => props.theme.palette.common.white} !important;
    padding: .3em 1em !important;
    text-decoration: none;
    &:visited {
        text-decoration: none;
        color: inherit;
    }
    &:hover {
        color: ${props => props.theme.palette.button.main};
    }
`;