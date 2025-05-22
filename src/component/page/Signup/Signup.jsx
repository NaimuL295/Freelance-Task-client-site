import React, { use } from 'react';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';

  import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext/AuthContext';

  
const Signup = () => {
const {createUser,signGoogle,updateUser ,setUser}=use(AuthContext)
  const navigate=useNavigate()
    const handlerSignup=(e)=>{
        e.preventDefault();
        const form=e.target;
        const  fromData=new FormData(form);
    const {name,email,password,photo}=Object.fromEntries(fromData.entries())

//console.log(password,email,name,photo);

if (!name) {
			toast.error("Enter Your Name")
			return
		}if (!photo) {
			toast.error("Enter Your Photo Url")
			return
		}if (!email  ) {
			toast.error("Enter You Email")
			return
		}
  if (password.length < 6) {
      toast.error(" Length must be at least 6 characters");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      toast.error(" Must have an Uppercase letter in the password");
      return;
    }

    if (!/[a-z]/.test(password)) {
      toast.error(" Must have a Lowercase letter in the password");
      return;

    }


    // if (!password) {
		// 	toast.error("Enter Your Password")
		// 	return
		// }
 createUser(email,password).
	then(res=>{
    
		const user=res.user
		updateUser({  displayName:name,photoURL:photo}).then(() => {
		   setUser({...user,displayName:name,photoURL:photo})
		
		}).catch((error) => {
		  console.log(error);
		   setUser(user)
		})
	  })
	//   .catch((err) => {console.log(err);});
	 
	toast.success("Register successful")
	 navigate("/")
	}
    
const googleLogin=()=>{
   signGoogle().then(()=>{
     setTimeout(() => {
     navigate("/")
    toast.success("Sign up successfully") 
   },1000);
  
   })
    
}
    return (
        <div>
    <div className="card bg-base-100 w-full lg:max-w-4/12 shrink-0 shadow-2xl mx-auto p-6 my-5">
         <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <form   onSubmit={handlerSignup}  className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text"  name='name' className="input w-full" placeholder="Name" />
          <label className="label">Photo URL</label>
          <input type="text"  name='photo' className="input  w-full" placeholder="Photo URL" />
          <label className="label">Email</label>
          <input type="email"   name='email' className="input  w-full  " placeholder="Email"     />
          <label className="label">Password</label>
          <input type="password" name="password"
    autoComplete="current-password"
    placeholder="Enter your password"
     
   //   pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$"
  aria-required="true"  className="input w-full"    required/>

          <button type='submit'   className="btn bg-green-500   btn-neutral mt-4"> Sign up</button><ToastContainer></ToastContainer>
             <Link to="/login">   <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already have an account? <span className='text-amber-600'>log in</span></p>  </Link>
        </fieldset>

        
		<button    onClick={googleLogin} type='submit' className="btn bg-white text-black border-[#e5e5e5] space-y-2">
  <svg aria-label="Google logo" width="26" height="26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
    </form>
</div>
        </div>
    );
};

export default Signup;