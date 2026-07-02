


import { AiFillFacebook, AiOutlineFacebook } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { ImFacebook, ImInstagram, ImLinkedin2, ImTwitter } from "react-icons/im";
import { LiaFacebook } from "react-icons/lia";
import { MdFacebook } from "react-icons/md";
import { PiFacebookLogoBold } from "react-icons/pi";
import { RiFacebookBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import logo from "../assets/logo/logo.png"
const Footer = ()=> {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-32 px-6">
      <div className="mx-auto max-w-screen-lg pt-16">
        {/*HEADER PART OF FOOTER... COMPANY LOGO AND CTA */}
        <header className="
            w-full 
            flex 
            flex-col
            md:flex-row
            items-start
            md:items-center
            md:justify-between 
            gap-6 
            bg-gray-200/80 
            
            rounded-xl 
            mb-8
            py-6
            px-8"
            >
            <Link to="/" className="w-fit space-y-6">
              <figure className="">
                <img
                   src={logo}
                   className="w-20 -translate-x-6 translate-y-2  rounded-xl"
                   alt="Company Logo"
                />
                <span className="text-2xl font-bold text-[#03045e]">
                   CoreStack Solutions
                </span>
              </figure>
                <p className="max-w-md text-black -gray-200  font-light leading-relaxed text-xl">
                  Transforming business operations through 
                  growth-focused technologies.
                </p>
            </Link>

            <button className="
                   hidden
                   md:block
                   cursor-pointer
                   h-fit 
                   text-white 
                   px-12 
                   py-4 
                   rounded-xl 
                   bg-[#03045e] 
                   shadow-sm 
                   font-bold
                   ">
               Schedule A Session
            </button>
           
        </header>

        {/** LINKS AND SOCIAL */}
        <div className="grid gap grid-cols-2 lg:grid-cols-4 text-black my-12">
           
           {/*SOCIAL */}
           <div className="flex gap-4 lg:col-span-2 w-full h-40">
              <div className="w-fit h-fit grid grid-cols-2 gap-4">
               
                   <Link to='/'
                         className="
                          w-fit h-fit 
                          rounded-xl 
                          p-3
                          bg-gray-300/80
                          hover:bg-gray-200
                          transition-all duration-500"
                    >
                     <ImFacebook size={22}/> 
                  </Link> 

                   <Link to='/'
                          className="
                            w-fit h-fit 
                            rounded-xl 
                            p-3 
                            bg-gray-300/80
                            hover:bg-gray-200
                            transition-all duration-500"
                    >
                     <ImLinkedin2 size={22} /> 
                  </Link> 

                   <Link to='/'
                         className="
                            w-fit h-fit 
                            rounded-xl 
                            p-3 
                            bg-gray-300/80
                            hover:bg-gray-200
                            transition-all duration-500" 
                      >
                     <ImInstagram size={22} /> 
                  </Link> 

                   <Link to='/'
                          className="
                            w-fit h-fit 
                            rounded-xl 
                            p-3 
                            bg-gray-300/80
                            hover:bg-gray-200
                            transition-all duration-500"
                      >
                     <ImTwitter size={22} /> 
                  </Link> 
              </div>
           </div>
         
          {/* Solutions */}
          <div className="text-[18px]">
            <h3 className="
                 mb-6 
                 text-sm 
                 font-semibold 
                 uppercase 
                 tracking-wider
                 
                 ">
              Quick links
            </h3>

            <ul className="flex flex-col space-y-4 text-[15px] font-light">
              
                <Link 
                    to="/" 
                    className="
                      hover:text-gray-600
                  ">
                    Home
                </Link>
                <Link 
                    to="/services" 
                    className="
                      hover:text-gray-600
                  ">
                 Our Services
                </Link>
                <Link 
                    to="/" 
                    className="
                      hover:text-gray-600
                  "> 
                  Our Solutions
                </Link>
                <Link 
                    to="/contact" 
                    className="
                       hover:text-gray-600
                    ">
                  About Us
                </Link>
                <Link 
                    to="/contact" 
                    className="
                       hover:text-gray-600
                    ">
                     Contact Us
                </Link>
            </ul>
          </div>

         {/* Contact */}
          <div className="text-black">
            <h3 className="
                mb-6 
                text-sm 
                font-semibold 
                uppercase 
                tracking-wider

                ">
              Contact
            </h3>

            <ul className="space-y-5 text-[15px] font-light">
              <li className="flex items-start gap-3">
                <BsWhatsapp className="mt-1 text-[#03045e]" size={18} />
                 <a href="tel: +265887914433" className="hover:text-gray-600">
                  +265 981 457 286
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FiPhone className="text-[#03045e]" size={18} />
                <a href="tel:+265887914433" className="hover:text-gray-600">
                  +265 887 914 433
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FiMail className="text-[#03045e]" size={18} />
                <a href="mailto:core..." className="hover:text-gray-600">
                  hello@corestack.com
                </a>
              </li>
            </ul>
          </div>
          

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-gray-400  p-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} 
               CoreStack Solutions. 
               All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-gray-500">
              <a href="/privacy-policy" className="hover:text-gray-600">
                Privacy Policy
              </a>

              <a href="/terms-of-service" className="hover:text-gray-600">
                Terms of Service
              </a>

              <a href="/cookies" className="hover:text-gray-600">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;  