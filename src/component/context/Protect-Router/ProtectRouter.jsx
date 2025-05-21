
import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import {  Navigate, useLocation } from 'react-router';
import Spinner from '../../Spinner/Spinner';
const ProtectRouter = ({children}) => {

         const location=useLocation()
const {user,Loading} =useContext(AuthContext)

if (Loading) {
   return <Spinner></Spinner>
}

if(!user || !user?.email){
    return   <Navigate state={{from:location.pathname}} to="/login">   </Navigate>
}
    return (
        <div>
        {children}   
      
        </div>
    );
};

export default ProtectRouter;