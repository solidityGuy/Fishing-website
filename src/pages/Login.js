import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {LoginComponent} from '../components/LoginComponent';

export const Login = () => {
    return(
        <>
            <Navbar/>
            <LoginComponent/>
            <Footer/>
        </>
    );
};