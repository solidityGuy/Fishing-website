import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ProductsComponent } from '../components/ProductsComponent';

export const Products = () => {
    return(
        <>
            <Navbar/>
            <ProductsComponent/>
            <Footer/>
        </>
    );
};