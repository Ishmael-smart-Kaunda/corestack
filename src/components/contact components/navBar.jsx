import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png"

const Nav = () =>{
          return(
                <header 
                   className="
                      fixed
                      top-0
                      left-0
                      z-50
                      w-full
                      px-6
                      py-4  
                      bg-white
                      shadow-sm
                      "
                  >
                  <nav 
                    className="
                    w-full
                    max-w-screen-lg
                    h-full
                    mx-auto
                    flex
                    justify-between
                    items-center
                    rounded-md
                  ">
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
                          ">
                           Corestack Solutions
                        </figcaption>
                     </figure>
                  </Link>
                  {/*Links */}
                     <ul 
                      className="
                        hidden
                        lg:flex
                        w-6/10
                        items-center
                        gap-16
                        justify-end
                        h-full
                        text-[#222831]
                        text-[15px]
                        font-semibold
                      ">
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
                        </ul>
                  </nav>
                </header>
          )
}

export default Nav;