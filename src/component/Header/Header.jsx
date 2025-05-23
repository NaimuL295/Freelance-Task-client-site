
import React, { useContext} from 'react';
import { NavLink } from 'react-router';
import logo from "../../assets/Image [h-8].png"
import { Link } from 'react-router';

import { AuthContext } from '../context/AuthContext/AuthContext';
import Theme from '../theme/Theme';
const Header = () => {
 const {user,logout}=useContext(AuthContext)
//console.log(user);


  

  const link=  <>
  <li className='list-none mx-1'><NavLink 
  className={({ isActive }) =>
    isActive ? 'border-b-2 border-gray-950 list-none  p-1' : 'p-1'
  } to="/">Home</NavLink></li>
 
  <li    className='list-none mx-1 '><NavLink   className={({ isActive }) =>
    isActive ? 'border-b-2 border-gray-950 list-none p-1' : 'p-1'
  } to="/browseTask">Browse Tasks
</NavLink></li>
  <li    className='list-none mx-1 '><NavLink   className={({ isActive }) =>
    isActive ? 'border-b-2 border-gray-950 list-none p-1' : 'p-1'
  } to="/addTask">AddTask
</NavLink></li>

<li className='list-none'> <Theme></Theme></li>
  </>
const handlerSigOut=()=>{
logout().then(() => {
  
  
})

}

    return (   
      <div className="navbar bg-base-100 shadow-sm px-6 py-4 text-base">
      <div className="navbar-start">
      <li className=' list-none lg:flex max-sm:hidden  font-bold'><img  className='w-40 bg-center bg-cover' src={logo} alt='' /></li>
        <div className=" lg:hidden  md:hidden dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-x-3 ">
          
          {link}
           {user? <NavLink to="/myTask"> My Posted Tasks </NavLink>  :""} 
          </ul>
        </div>
      </div>
      <div className="navbar-center">
      </div>
      <div className="navbar-end space-x-2 pr-5">
 <div className='lg:flex md:flex  max-sm:hidden '>
 {link}
 </div>
   {user ? (
  <div className="avatar avatar-online group relative">
    <div className="w-9 rounded-full  ">
      <NavLink to="/myTask">
        <img
          className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-gray-800 "
          src={user?.photoURL || null}
          alt=''
        />
      </NavLink>
    </div>
    <div className='flex lg:flex-col '>

      <h3 className="absolute top-[30px] left-0 right-0 text-center text-sm font-semibold text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {user?.displayName ||"User Name"}
    </h3>
    </div>
  </div>
) : (
  ""
)}


    {user? <button onClick={handlerSigOut} className="btn bg-gray-800  text-base  text-white ">  Log out </button>: 
        <button className="btn bg-gray-800   text-white text-base "><Link to="/login">Login</Link>      </button>}
     
     {user? "" :<Link to="/signup"><button className="btn bg-gray-800   text-base text-white ">Signup</button> </Link>  }

      </div>
    </div>
   
      
     
    
      
      
      
  

    );
};


export default Header;