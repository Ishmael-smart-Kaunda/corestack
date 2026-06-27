
import { HiArrowRight, HiChevronRight } from "react-icons/hi";
import services from "../../data/services";
import ServicesCard from "./services card";
import { Link } from "react-router-dom";
const Services = () => {
        return(
               <section className="w-full px-5 md:px-15 py-10 -[clamp(1rem, 5vw, 8rem)] bg-gray-100/50">
                    <header className="hidden">
                        <h2 className="text-[2rem] font-bold my-10 mx-auto w-fit">Our Solutions</h2>
                        <p className="md:w-8/10 text-center mx-auto text-[1.7rem] font-light">
                            Transforming business challenges into opportunities 
                            through purposeful digital innovation.
                        </p>
                        <p className="md:w-8/10 my-4 text-center mx-auto text-[1.3rem] font-light">
                            Modern businesses require more than websites and software-
                            they need systems that streamline operations, support decision-making, 
                            improve customer interactions, and create opportunities for growth. 
                            Our digital solutions are designed to help businesses operate smarter 
                            and compete more effectively in a connected economy.
                        </p>
                    </header>
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8">
                        <aside className="col-span-1 
                                    lg:col-span-2 
                                    space-y-9 h-fit
                                    md:sticky md:top-28 
                                    self-start 
                                    h-fit
                                    z-0"        
                                >
                              <h2 className="text-[2rem] font-bold w-fit">Our Services</h2>
                                <p className="w-full   text-[1.3rem] font-semibold">
                                    We transform business challenges into opportunities 
                                    through purposeful digital innovations.
                                </p>
                                <p className="w-full my-4 text-[1.2rem]">
                                    Modern businesses require more than websites and software.
                                    They need systems that streamline operations, support decision-making, 
                                    improve customer interactions, and create opportunities for growth. 
                                    Our solutions are designed to help businesses operate smarter 
                                    and compete more effectively in a connected economy.
                                </p>
                                <Link to=''
                                      className="px-5 py-3 font-semibold text-white rounded-full bg-[#0066FF]"
                                >
                                    <button className="cursor-pointer inline-flex items-center gap-3 md:mt-30">
                                        Explore more services <HiArrowRight className="size-5"/>
                                    </button>
                                    
                                </Link>

                        </aside>
                        <div className="w-full grid grid-cols-2 gap-5 md:col-span-2 md:col-start-2 lg:col-start-3">
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