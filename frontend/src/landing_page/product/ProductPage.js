import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSectiion from './RightSection';
import Universe from './Universe';
import Footer from '../Footer';

function ProductPage() {
    return ( 
        <>
            <Navbar />
            <Hero />
            <LeftSection />
            <RightSectiion /> 
            <Universe />
            <Footer /> 
        </>
     );
}

export default ProductPage;