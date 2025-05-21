import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Link, useNavigate } from "react-router";
  import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
 const {signinUser,signGoogle}=use(AuthContext)
  const navigate=useNavigate()
    const handlerLogin=(e)=>{
        e.preventDefault()
 
 const form=e.target;
        const  fromData=new FormData(form);
      const {email,password}=Object.fromEntries(fromData.entries())
        console.log(email,password);


if (!email) {
    toast.error("Enter You Email")
    return
}if (!password) {
    toast.error("Enter Your Password")
    return
}

signinUser(email,password).then((result) => {
    console.log(result);
    
}).catch((err) => {
    console.log(err);
    
});
    }


const googleLogin=()=>{
   signGoogle().then(()=>{
     setTimeout(() => {
    navigate("/")
  },1000);
  
    }) 
}
    return (
      
     <div>
    <div className="card bg-base-100 w-full max-w-2/6 shrink-0 shadow-2xl mx-auto  p-5 my-5">
        <h1 className="text-4xl font-bold">Log in now!</h1>
      <div className="card-body ">
        <form  onSubmit={handlerLogin}    className="fieldset space-y-3">

          <label className="label">Email</label>
          <input type="email"   name='email' className="input w-full" placeholder="Email" required/>
          
          <label className="label">Password</label>
          <input type="password" name='password' 
          
          className="input w-full " placeholder="Password" required />
          <div><a className="link link-hover">Forgot password?</a>  <ToastContainer />     </div>
          <button type='submit'   className="btn btn-neutral mt-4">Log in      </button>

     <Link to="/signup">     <p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?<span className="text-amber-600">Sign up now</span>  </p></Link>
      <button   onClick={googleLogin}    className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="36" height="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
        </form>
      </div>
   </div>
        </div>
    );
};

export default Login;