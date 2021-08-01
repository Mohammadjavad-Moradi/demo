import React from 'react';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import LockRoundedIcon from '@material-ui/icons/LockRounded';

import CustomButton from '../../atom-components/custom-button/custom-button.component';
import TitleContainer from '../../atom-components/title-container/title-container.component';

import { signInWithGoogle, auth } from '../../../firebase/firebase.utils';

import { SignInBox, ButtonsConteiner, FormControlContainer, InputLabelContainer, SignUpText, SignUpLink } from './sign-in.styles';

const SignIn = () => {
    const [values, setValues] = React.useState({
        userName: '',
        password: '',
        showPassword: false
    })


    const handleSubmit = async event => {
        console.log(`submitted`)
        //event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword( values.userName, values.password );   
            setValues({ ...values, userName: '', password: ''});
        }   catch (error) {
            console.log(error)
        } 

    };
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };


    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return (
        <div>
            <TitleContainer name='Sign In' color='blue'/>
            <SignInBox>
                <form onSubmit={handleSubmit}>
                    <FormControlContainer >
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="User Name" value={values.userName} required onChange={handleChange('userName')}/>
                            </Grid>
                        </Grid>
                    </FormControlContainer>
                    <FormControlContainer >
                        <Grid container spacing={1} alignItems='flex-end'>
                            <Grid item>
                                <LockRoundedIcon />
                            </Grid>
                            <Grid item>
                                <InputLabelContainer required htmlFor="standard-adornment-password">Password</InputLabelContainer>
                                <Input
                                    id="standard-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                            </Grid>
                        </Grid>
                    </FormControlContainer>
                    <ButtonsConteiner >
                        <CustomButton type='submit' variant='contained' color='secondary' size='medium' handleClick={handleSubmit}>Sign in</CustomButton>
                        <CustomButton variant='contained' color='secondary' size='medium' handleClick={signInWithGoogle}>Sign in with google</CustomButton>
                    </ButtonsConteiner>
                    <SignUpText>or <SignUpLink to='/signup'>sign up</SignUpLink> for free</SignUpText>
                </form>
            </SignInBox>
        </div>
    );
}

export default SignIn;

