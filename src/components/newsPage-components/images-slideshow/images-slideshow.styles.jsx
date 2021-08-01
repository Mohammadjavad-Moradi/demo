import styled from 'styled-components';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


export const SlideWrapper = styled(({...props}) => <GridListTile {...props} />)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
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
    transform: translateZ(0);
`;

export const ImageWrapper = styled.img`
    width: 300px;
    height: auto;
`;