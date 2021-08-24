import React from 'react';

import { auth, createUserProfile } from '../../../firebase/firebase.utils';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import EmailIcon from '@material-ui/icons/Email';

import CustomButton from '../../atom-components/custom-button/custom-button.component';
import TitleContainer from '../../atom-components/title-container/title-container.component';

import { SignUpBox, ButtonsConteiner, FormControlContainer, InputLabelContainer, SignUpText, SignUpLink } from './sign-up.styles';

const SignUp = () => {
    const [values, setValues] = React.useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
        showConfirmPassword: false
    })


    const handleSubmit = async event => {
        console.log(`submitted`);
        //event.preventDefault();
        if (values.password !== values.confirmPassword) {
            alert(`Your passwords don't matched!`);
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(values.email, values.password);
            const displayName = values.userName;
            await createUserProfile( user, {displayName});
            
            setValues({ ...values, userName: '', email: '', password: '', confirmPassword: ''});
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
    
    const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
    };
    
    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

    return (
        <div>
            {/* <TitleContainer name='Sign Up' color='blue'/> */}
            <SignUpBox>
                <form onSubmit={handleSubmit}>
                    <FormControlContainer >
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField id="user-name" label="User Name" value={values.userName} required onChange={handleChange('userName')}/>
                            </Grid>
                        </Grid>
                    </FormControlContainer>
                    <FormControlContainer >
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <EmailIcon />
                            </Grid>
                            <Grid item>
                                <InputLabelContainer required htmlFor="E-mail">E-mail</InputLabelContainer>
                                <Input id="email" label="E-mail" type="email" value={values.email} required onChange={handleChange('email')}/>
                            </Grid>
                        </Grid>
                    </FormControlContainer>
                    <FormControlContainer >
                        <Grid container spacing={1} alignItems='flex-end'>
                            <Grid item>
                                <LockRoundedIcon />
                            </Grid>
                            <Grid item>
                                <InputLabelContainer required htmlFor="password">Password</InputLabelContainer>
                                <Input
                                    id="password"
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
                    <FormControlContainer >
                        <Grid container spacing={1} alignItems='flex-end'>
                            <Grid item>
                                <LockRoundedIcon />
                            </Grid>
                            <Grid item>
                                <InputLabelContainer required htmlFor="Confirm Password">Confirm Password</InputLabelContainer>
                                <Input
                                    id="Confirm Password"
                                    type={values.showConfirmPassword ? 'text' : 'password'}
                                    value={values.confirmPassword}
                                    onChange={handleChange('confirmPassword')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowConfirmPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        >
                                        {values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                            </Grid>
                        </Grid>
                    </FormControlContainer>
                    <ButtonsConteiner >
                        <CustomButton type='submit' variant='contained' color='secondary' size='medium' handleClick={handleSubmit}>Sign up</CustomButton>
                    </ButtonsConteiner>
                    <SignUpText>I have an account,<SignUpLink to='/signin'> Sign in</SignUpLink></SignUpText>
                </form>
            </SignUpBox>
        </div>
    );
}

export default SignUp;