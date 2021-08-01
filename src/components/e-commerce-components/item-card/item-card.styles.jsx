import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

export const CardWrapper = styled(({...props}) => <Card {...props} />)`
    width: 300px;
    margin: 1em .2em;
    &:hover {
        box-shadow: 5px 6px 16px 0px rgba(0,0,0,0.55);
    }
`;

export const CardMediaWrapper = styled(({...props}) => <CardMedia {...props} />)`
    height: 300px;
    cursor: pointer;
`;

export const NameWrapper = styled.div`
    font-size: .9em;
    margin: .2em .5em;
`;

export const PriceIndicator = styled.div`
    margin: .2em .5em;
    display: flex;
    justify-content:space-between;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1em;
`;