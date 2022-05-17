import react from 'react';
import {Button} from '../ButtonElement';
import { SigninContainer, InputField, Labels, ButtonContainer } from './SigninElements';

export const SigninComponent = () => {
    return(
        <>
            <SigninContainer>
                <Labels>Username</Labels>
                <InputField placeholder="Username" type="text"></InputField>
                <Labels>Email</Labels>
                <InputField placeholder="Email" type="text"></InputField>
                <Labels>Password</Labels>
                <InputField placeholder="Password" type="text"></InputField>
                <ButtonContainer>
                    <Button>Sign Up</Button>
                </ButtonContainer>
            </SigninContainer>
        </>
    );
}