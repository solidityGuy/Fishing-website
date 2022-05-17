import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {SigninComponent} from '../components/SigninComponent';

export const Signin = () => {
    return(
        <>
            <Navbar/>
            <SigninComponent/>
            <Footer/>
        </>
    );
};