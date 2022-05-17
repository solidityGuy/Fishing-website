import React from 'react';
import {Button} from '../ButtonElement';
import {LoginContainer, Labels, InputField, ButtonContainer} from './LoginElements';

export const LoginComponent = () => {
    return(
        <>
            <LoginContainer>
                <Labels>Your username or email</Labels>
                <InputField placeholder="Username or email" type="text"></InputField>
                <Labels>Password</Labels>
                <InputField placeholder="Password" type="text"></InputField>
                <ButtonContainer>
                    <Button>Login</Button>
                </ButtonContainer>
            </LoginContainer>
        </>
    );
}