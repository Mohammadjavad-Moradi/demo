import styled from 'styled-components';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';

export const SignInBox = styled.div`
    width: 300px;
    margin: 50px auto;

`;

export const Title = styled.div`
    font-size: 2em;
    font-weight: bold;
    color: ${props => props.theme.palette.common.white};
`;

export const FormControlContainer = styled(FormControl)`
    margin: .5em auto !important;
    color: ${props => props.theme.palette.primary.main};
`;

export const InputLabelContainer = styled(InputLabel)`
    left: 30px !important;
`;

export const ButtonsConteiner = styled(({...props}) => <Grid container direction="row" justify="space-around" alignItems="center" {...props}/>)`
    margin-top: 1em;
`;