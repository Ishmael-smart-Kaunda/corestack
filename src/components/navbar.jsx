import {Link} from "react-router-dom"
import logo from "../assets/logo/logo.png"
import { HiMenu } from "react-icons/hi";
import { MdMenu } from "react-icons/md";
import { HiChevronDown } from "react-icons/hi2";
const Navbar = () => { 
    return (
          <header 
             className="
                w-full 
                fixed
                top-0
                flex 
                md:gap-15
                justify-between
                  
                md:items-end
                bg-black/90 
                text-white 
                px-5 py-6"
               >
               <Link 
                className="
                  font-bold 
                  text-2xl 
                  text-white
                  border 
                  border-white/20
                  rounded-lg
               "
                  >
                  <img 
                    src={logo} 
                    alt="Logo" 
                    className="
                      invisible 
                      h-10 
                      translate-y-2" 
                  />
               </Link>
               <nav className="
                  hidden md:flex w-full 
                  justify-between 
                  "
                  >
              <ul className="
                  flex 
               flex-col md:flex-row 
                  self-end text-[0.9em] 
                  font-semibold 
                  gap-15 
                  "
                  >
                 <Link 
                    to="/"
                    className="">
                        Home
                 </Link>
                 <Link 
                    to="/solutions"
                    className="">
                        Our solutions
                 </Link>
                 <Link 
                    to="/industries"
                    className="">
                        Industries we serve
                 </Link>
                 <Link 
                    to="/contact"
                    className="">
                         Our strategies
                  </Link>
                 <Link 
                    to="/about"
                    className="">
                        About us
                 </Link>
              </ul>
               {/*user guide */}
              <div 
               className="
                    relative
                    mr-5 
                    flex 
                    self-start 
                    gap-10 
                    font-light">
                <Link to='/'
                    className="
                    flex
                    items-center
                    gap-2
                    group
                    px-8 
                    py 
                    border 
                    border-white/20 
                    rounded-full"
                   >   
                   Our pricing
                   <HiChevronDown className="size-4 mx-auto text-white/40"/>
                     <div className="
                           absolute 
                           bg-black
                           opacity-0
                            top-0
                           -left-[50%]
                           translate-x-[25%]
                           w-full 
                           h-70 
                           rounded-md 
                           invisible 
                           group-hover:visible 
                           group-hover:translate-y-12
                           group-hover:opacity-100
                           transition-all duration-500
                           border"
                     >
                        
                     </div>
                </Link>
                <Link to='/'
                    className="
                     flex
                     items-center
                     px-8 
                     py-2 
                     rounded-full 
                     bg-blue-900"
                   >   
                   Lets talk
                </Link>
             </div>
            </nav>
            {/*menu button */}
            <button onClick={(e)=>console.log('clicked', e)}
              className="md:hidden p-3 border rounded-md"
              >
               <MdMenu className="size-10"/>
            </button>
          </header>
    )
}  
export default Navbar; 