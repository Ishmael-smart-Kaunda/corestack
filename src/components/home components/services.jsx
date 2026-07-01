
import { HiArrowRight, HiChevronRight } from "react-icons/hi";
import services from "../../data/services";
import ServicesCard from "./services card";
import { Link } from "react-router-dom";
const Services = () => {
        return(
               <section className="w-full px-5 md:px-15 py-10 bg -gray-100/50">
                     <header className="mt-12 w-fit mx-auto text-center space-y-6">
                          {/*metadata */}
                          <span className="uppercase font-semibold text-[#03045e] tracking-wide">
                             what we do
                          </span>
                          <h2 className="text-3xl md:text-4xl font-bold my-3">
                                  Our Services
                         </h2>
                        <p className="w-full   text-lg font-semibold text-black/80 tracking-[0.3px] lg:text-xl">
                            Transforming business challenges into opportunities 
                            through purposeful digital innovations.
                        </p>
                     </header>
                    <div 
                         className="
                            w-full
                            max-w-screen-lg
                            mx-auto 
                            grid 
                            grid-cols-1 
                            md:grid-cols-2 
                            lg:grid-cols-3 
                            gap-6 
                            my-12
                            ">
                                 {services.map((service)=>
                               <ServicesCard 
                                  key={service.id}
                                  {...service}
                                />
                              )
                            }
                        <aside className="hidden col-span-1 
                                    lg:col-span-2 
                                    space-y-9 h-fit
                                    md:sticky md:top-28 
                                    self-start 
                                    h-fit
                                    z-0"        
                                >
                                <h2 className="text-3xl md:text-4xl font-bold w-fit">
                                  Our Services
                                </h2>
                                <p className="w-full   text-lg  lg:text-xl">
                                    Transforming business challenges into opportunities 
                                    through purposeful digital innovations.
                                </p>
                                <Link to='/'>
                                    <button className="hidden md:inline-flex text-white  cursor-pointer px-5 py-3 font-semibold 
                                            items-center gap-3 md:my-10 bg-[#03045e]  rounded-full">
                                        Explore more <HiArrowRight className="size-5"/>
                                    </button>   
                                </Link>

                        </aside>
                        <div className="
                                hidden
                               w-full 
                               grid 
                               grid-cols-1 
                               md:grid- cols-2 
                               gap-5 md:col-span-2 
                               md:co l-start-2 
                               lg:col -start-3
                               ">
                            {services.map((service)=>
                               <ServicesCard 
                                  key={service.id}
                                  {...service}
                                />
                              )
                            }
                        </div>
                    </div>
                   
               </section>
        )
    }
export default Services;