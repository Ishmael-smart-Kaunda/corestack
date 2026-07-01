import {Link, NavLink} from "react-router-dom"
import logo from "../assets/logo/logo.png"
import { HiMenu, HiX } from "react-icons/hi";
import { MdMenu } from "react-icons/md";
import { HiChevronDown } from "react-icons/hi2";
import { useState, useReducer, useEffect } from "react";


const pricesData =[
       {
          id:1,
          service: 'Business process automation',
          selectedCurrency: "MWK",
          price:300000,
       },
        {
          id:2,
          service: 'Web platforms & digitalpresence',
          selectedCurrency: "MWK",
          price:400000,
       },
        {
          id:3,
          service: 'e-Commerce platforms',
          selectedCurrency: "MWK",
          price:450000,
        },
        {
          id:4,
          service: 'System maintainance & support',
          selectedCurrency: "MWK",
          price:420000,
       },
       {
          id:5,
          service: 'Search optimization & online visibility',
          selectedCurrency: "MWK",
          price:15000,
       },
   ]
   const api = 'https://api.frankfurter.dev/v2/rates?quotes=USD,MWK'
   const exchangeRate=7500

const Navbar = () => { 
    

   const [currencies, setCurrencies] = useState({
                                       id:'',
                                       currency:''
                                    })
   const [rates, setRates] = useState({});
   useEffect(()=>{
        const getRates = async () =>{
            const response = await fetch('https://api.frankfurter.dev/v2/rates?quotes=USD,MWK');
            const data = await response.json();
            const formattedRates = {};
            data.forEach((rate)=>{
                 formattedRates[rate.quote]=rate.rate
               })
            
            setRates(formattedRates);
            
        }
        getRates()
   },[]);

   //  RATE
   const usdRate =
    rates.MWK && rates.USD
    ? rates.MWK / rates.USD
    : null;

  const handleCurrency = (e, item) =>{
         setCurrencies({
               ...currencies,
               id:item.id,
               currency:e.target.value
             }
         )
         console.log('CURRENCIES', currencies)
  }
      // TOGGLE MENU BAR
   const [openMenu, setOpenMenu] = useState(false);
   const toggleMenu = () =>{
            setOpenMenu(!openMenu) 
         }

   const [viewPrice, setViewPrice] = useState(false);
   const togglePriceView = () =>{
         setViewPrice(!viewPrice)    
        }



   return (
          <header 
             className="
                w-full 
                fixed
                flex
                justify-between
                items-center
                top-0
                bg-white
                shadow-sm
                px-5 
                py-6
                max-h-23
                z-100
                "
               >
               {/**LOGO */}
               <Link 
                className=" md:hidden
                  flex items-center border
                  rounded-lg
                  h-10 w-30 p-5 
               
               "
                  >
                  <img 
                    src={logo} 
                    alt="Logo" 
                    className="hidden h-15
                     object-cover" 
                  />
               </Link>
               <nav className="
                      hidden 
                      md:flex 
                      items-center
                      justify-between
                      max-w-screen-lg
                      mx-auto
                      w-full
                     "
               >
                  {/**LOGO */}
               <Link 
                className="
                  flex items-center border
                  rounded-lg
                  h-10 w-30 p-5 
               
               "
                  >
                  <img 
                    src={logo} 
                    alt="Logo" 
                    className="hidden h-15
                     object-cover" 
                  />
               </Link>
               
               <ul className="
                     flex 
                     justify-between
                     items-center
                     gap-10
                     font-semibold
                     text-[14px]
                     tracking-[0.8px]
                     text-black/70
                     "
                     >
                     <Link 
                     to="/"
                     className="hover:text-[#03045e] transition-all duration-300">
                           Home
                     </Link>
                     <Link 
                     to="/services"
                     className="hover:text-[#03045e] transition-all duration-300">
                           Services
                     </Link>
                     <Link 
                     to="/contact"
                     className="hover:text-[#03045e] transition-all duration-300">
                          Approach
                     </Link>
                     <Link 
                     to="/industries"
                     className="hover:text-[#03045e] transition-all duration-300">
                           Products
                     </Link>
                     <Link 
                     to="/about"
                     className="hover:text-[#03045e] transition-all duration-300">
                           About us
                     </Link>
                     <Link to='/'
                     className="
                        px-8
                        py-2 
                        font-semibold
                        rounded-xl 
                        bg-[#03045e]
                        text-white
                        shadow-sm
                        shadow-[#03045e]/20
                        hover:bg-[#03045e]/90
                        transition-all duration-300
                        "
                     >   
                     Lets talk
                </Link>
               </ul>
               {/*CTA */}
               
             
            </nav>
 
            {/*menu button */}
            <button onClick={toggleMenu}
              className="md:hidden z-50 rounded-md"
              >
               <MdMenu className="size-8"/>
            </button>


             {/*MOBILE MENU */}
             <nav className={`
                  fixed
                  top-0  
                  left-0
                  ${
                     openMenu ?
                     'translate-x-[0] translate-y-[0] opacity-100' 
                     :
                     'translate-x-[100%] translate-y-[-100%] opacity-0'
                  }
                  transition-all duration-500
                  z-50
                  flex
                  flex-col 
                  justify-between

                  gap-[3rem]
                  md:hidden 
                  w-full 
                  h-full 
                  bg-white/95
                  pb-10 pt-5
                  px-2
                  `}
               >
                <div className="relative w-full px-5">
                   <button onClick={toggleMenu} 
                     className="absolute right-3 p-2 rounded-full bg-gray-200/20">
                     <HiX className="size-7 text-black/30 shrink-0"/>
                   </button>
                </div>
                <ul className="
                  flex 
                  flex-col
                  items-center 
                  text-[1.3em] 
                  font-semibold 
                  gap-15 
                  z-100
                  "
                  >
                 <NavLink 
                    
                    to="/"
                    onClick={toggleMenu}
                    className="hover:text-[#03045e] transition-all duration-300 "
                    >
                        Home
                 </NavLink>
                 <NavLink 
                    to="/solutions"
                    onClick={toggleMenu}
                    className="">
                        Our services
                 </NavLink>
                 <NavLink 
                    to="/contact"
                    onClick={toggleMenu}
                    className="">
                         Our approach
                  </NavLink>
                  <NavLink 
                    to="/about"
                    onClick={toggleMenu}
                    className="">
                        current solutions
                 </NavLink>
                 <NavLink 
                    to="/about"
                    onClick={toggleMenu}
                    className="">
                        About us
                 </NavLink>
              </ul>
               {/*user guide */}
              <div 
                  className="
                    flex 
                    justify-between 
                    
                    font-light
                    border-t
                    border-black/20
                    pt-[4rem] 
                    "
               >
                {/*PRICE OVERVIEW BUTTON */}
                <button onClick={togglePriceView}
                    className="
                    flex
                    items-center
                    gap-2
                    group
                    px-8 
                    py 
                    border 
                    border-black/20 
                    rounded-full"
                   >   
                   Pricing overview
                   <HiChevronDown className="size-4 mx-auto text-black/40 -rotate-90"/>
                </button>

                <Link to='/'
                    className="
                     flex
                     items-center
                     px-8 
                     py-2 
                     rounded-full 
                     bg-blue-900
                     text-white"
                   >   
                   Lets talk
                </Link>
             </div>
            </nav>
           
             
            
          </header>
    )
}  
export default Navbar; 