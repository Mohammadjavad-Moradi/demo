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

import CustomButton from '../custom-button/custom-button.component';
import TitleContainer from '../title-container/title-container.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import { SignInBox, ButtonsConteiner, FormControlContainer, InputLabelContainer } from './sign-in.styles';

const SignIn = () => {
    const [values, setValues] = React.useState({
        userName: '',
        password: '',
        showPassword: false
    })


    const handleSubmit = event => {
        console.log(`submitted`)
        setValues({ ...values, userName: '', password: ''});

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
            <TitleContainer name='ورود کاربر' color='blue'/>
            <SignInBox>
                <form onSubmit={handleSubmit}>
                    <FormControlContainer >
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="نام کاربری" value={values.userName} required onChange={handleChange('userName')}/>
                            </Grid>
                        </Grid>
                    </FormControlContainer>
                    <FormControlContainer >
                        <Grid container spacing={1} alignItems='flex-end'>
                            <Grid item>
                                <LockRoundedIcon />
                            </Grid>
                            <Grid item>
                                <InputLabelContainer htmlFor="standard-adornment-password">کلمه عبور</InputLabelContainer>
                                <Input
                                    id="standard-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    required
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
                        <CustomButton type='submit' variant='contained' color='secondary' size='medium' handleClick={handleSubmit}>ورود</CustomButton>
                        <CustomButton variant='contained' color='secondary' size='medium' handleClick={signInWithGoogle}>اکانت گوگل</CustomButton>
                    </ButtonsConteiner>
                </form>
            </SignInBox>
        </div>
    );
}

export default SignIn;