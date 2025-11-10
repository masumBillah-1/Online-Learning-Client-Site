import React from 'react';
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const Root = () => {

    
    return (
        <div className='min-h-screen flex flex-col'>

            <nav>

            <Navbar ></Navbar>


            </nav>




            <main className='grow'>

            <Outlet></Outlet>
           


            </main>


       <Footer />
            

            
            
        </div>
    );
};

export default Root;