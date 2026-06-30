
import { HiArrowRight, HiChevronRight } from "react-icons/hi";
import services from "../../data/services";
import ServicesCard from "./services card";
import { Link } from "react-router-dom";
const Services = () => {
        return(
               <section className="w-full px-5 md:px-15 py-10 bg -gray-100/50">
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8">
                        <aside className="col-span-1 
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
                                            items-center gap-3 md:my-10 bg-[#0066FF] rounded-full">
                                        Explore more <HiArrowRight className="size-5"/>
                                    </button>   
                                </Link>

                        </aside>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:col-span-2 md:col-start-2 lg:col-start-3">
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