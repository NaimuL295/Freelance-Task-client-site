import React from 'react';
import logo from "../../assets/Image [h-8].png"
import { Link } from 'react-router';
import { IoLogoYoutube } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";	
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
         <footer className="px-4 py-8 border-t border-t-gray-200  mt-2">
	<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div className="flex flex-row pr-3 space-x-4 sm:space-x-8 items-center">
				<Link >  <img   className='w-30 h-12 ' src={logo} alt="" /> </Link>
			<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
				<li>
				<Link>Terms & Conditions</Link>
				</li>
				<li>
					<Link> Contact details  </Link>
				</li>
			</ul>
		</div>
		<ul className="flex flex-wrap pl-3 space-x-2 sm:space-x-4">
			<Link to=""><li>
		<FaGithub size={30}/>
			</li></Link>
			<Link className='text-red-600 '  to="https://www.youtube.com/@ANaimul-o3p"><li>
			<IoLogoYoutube size={30}/>
			</li></Link>
		<Link className='text-blue-700'  to="https://www.facebook.com/">	<li>	
					<FaFacebookF size={30}/>
			</li></Link>
		</ul>
	</div>
</footer>

        </div>
    );
};

export default Footer;