import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data';

export const Home = () => {
    return (
        <>
          <Navbar/>
          <HeroSection/>
          <InfoSection {...homeObjOne}/>
          <InfoSection {...homeObjTwo}/>
          <Footer/>
        </>
    );
};