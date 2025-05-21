import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Header/>
              <div className='min-h-[calc(100vh-200px)]' >
 <main>      <Outlet/></main>
       </div>  
    <Footer/>   
        </div>
    );
};

export default Layout;