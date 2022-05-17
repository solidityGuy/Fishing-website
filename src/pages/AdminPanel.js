import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {AdminComponent} from '../components/AdminComponent';


export const AdminPanel = () => {
    return (
        <>
          <Navbar/>
          <AdminComponent/>
          <Footer/>
        </>
    );
};