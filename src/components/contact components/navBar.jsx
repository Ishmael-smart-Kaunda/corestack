
import {Link, NavLink} from "react-router-dom"
import logo from "../../assets/logo/logo.png"





const Nav = () => { 

               return (
                     <header 
                        className="
                           w-full 
                           fixed
                           top-0
                           left-0
                           z-50
                           w-full
                           px-6
                           py-4  
                           bg-white
                           shadow-sm
                           z-100
                           "
                           >
                           {/**nav */}
                           <nav 
                           className="
                              hidden 
                              md:flex 
                              items-center
                              justify-between
                              max-w-[1180px]
                              mx-auto
                              w-full
                           "
                           >
                           {/** logo */}
                           <Link 
                              to='/'
                              className=""
                           >
                           <figure 
                              className="
                                 flex 
                                 items-center
                                 h-full
                                 border
                                 border-black/7
                                 rounded-md
                                 font-semibold

                           ">
                              <img src={logo} 
                                 alt="logo" 
                                 className="
                                    w-12
                              "/>
                              <figcaption
                                 className="
                                 mr-3
                                 text-[#090040]
                                 ">
                                 Corestack Solutions
                              </figcaption>
                           </figure>
                           </Link>
                           {/*nav links */}
                           <ul className="
                                 flex 
                                 justify-between
                                 items-center
                                 gap-10
                                 font-semibold
                                 text-[14px]
                                 tracking-[0.8px]
                                 text-[#1e293b]
                                 "
                                 >
                                 <NavLink 
                                 to="/"
                                 className={({ isActive }) => `
                                    relative
                                    ${isActive 
                                       ?"text-[#03045e]" 
                                       : ""
                                    }
                                 `}
                                 >
                                 {  ({isActive})=>(
                                    <>
                                    Home
                                       <div className={`
                                          absolute 
                                          left-0 
                                          bottom-0
                                          h-[0.5px]
                                          bg-[#03045e]
                                          transition-all duration-500
                                          ${isActive 
                                             ? 'w-full'
                                             : 'w-0'
                                          }
                                          `}
                                       />
                                    </>
                                 )}
                                    
                                 </NavLink>


                                 <NavLink
                                 to="/services"
                                 className={({ isActive }) => `
                                    relative
                                    ${isActive 
                                       ?"text-[#03045e]" 
                                       : ""
                                    }
                                 `}
                                 >
                                 {({isActive})=>(
                                    <>
                                    Services
                                       <div className={`
                                          absolute 
                                          left-0 
                                          bottom-0
                                          h-[0.5px]
                                          bg-[#03045e]
                                          transition-all duration-500
                                          ${isActive 
                                             ? 'w-full'
                                             : 'w-0'
                                          }
                                          `}
                                       />
                                    </>
                                 )}
                                 </NavLink>


                                 <NavLink 
                                 to="/approach"
                                 className={({ isActive }) => `
                                    relative
                                    ${isActive 
                                       ?"text-[#03045e]" 
                                       : ""
                                    }
                                 `}
                                 >
                                 {({isActive})=>(
                                    <>
                                    Approach
                                       <div className={`
                                          absolute 
                                          left-0 
                                          bottom-0
                                          h-[0.5px]
                                          bg-[#03045e]
                                          transition-all duration-500
                                          ${isActive 
                                             ? 'w-full'
                                             : 'w-0'
                                          }
                                          `}
                                       />
                                    </>
                                 )}   
                                 </NavLink>

                                 <NavLink
                                 to="/projects"
                                 className={({ isActive }) => `
                                    relative
                                    ${isActive 
                                       ?"text-[#03045e] " 
                                       : ""
                                    }
                                 `}
                                 >
                                 {({isActive})=>(
                                    <>
                                       Products
                                       <div className={`
                                          absolute 
                                          left-0 
                                          bottom-0
                                          h-[0.5px]
                                          bg-[#03045e]
                                          transition-all duration-500
                                          ${isActive 
                                             ? 'w-full'
                                             : 'w-0'
                                          }
                                          `}
                                       />
                                    </>
                                 )}   
                                 </NavLink>

                                 <NavLink 
                                 to="/about"
                                 className={({ isActive }) => `
                                    relative
                                    ${isActive 
                                       ?"text-[#03045e]" 
                                       : ""
                                    }
                                 `}
                                 >
                                 {({isActive})=>(
                                    <>
                                       About us
                                       <div className={`
                                          absolute 
                                          left-0 
                                          bottom-0
                                          h-[0.5px]
                                          bg-[#03045e]
                                          transition-all duration-500
                                          ${isActive 
                                             ? 'w-full'
                                             : 'w-0'
                                          }
                                          `}
                                       />
                                    </>
                                 )}     
                                 </NavLink>
                           </ul>
                        </nav>
                     
                        
                        
                     </header>
               )
            }  
            export default Nav; 