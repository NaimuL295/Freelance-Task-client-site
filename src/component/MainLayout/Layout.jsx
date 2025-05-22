import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router';
const Layout = () => {
    
   const {pathname} = useLocation();
    const staticPaths = ['/', '/browseTask', '/login', '/signup', '/myTask', '/profile', '/addTask'];
const hideNavbar = 
  staticPaths.includes(pathname) ||
  pathname.startsWith('/task/') ||
  pathname.startsWith('/update/');

    return (
        <div>
         {hideNavbar && <Header/>}
              <div className='min-h-[calc(100vh-200px)]' >
 <main>      <Outlet/></main>
       </div>  

  {  hideNavbar && <Footer/>}

        </div>
    );
};

export default Layout;