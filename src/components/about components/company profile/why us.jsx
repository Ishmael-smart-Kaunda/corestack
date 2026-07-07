import { BiBriefcase } from "react-icons/bi";
import { BsPuzzle } from "react-icons/bs";
import { FiTarget } from "react-icons/fi";
import { ImTarget } from "react-icons/im";
import { LuBlocks, LuBuilding2, LuLayers3, LuUsersRound } from "react-icons/lu";


const WhyUs = () =>{
      return(
           <section 
              className="
                w-full
                px-6
            ">
               

                {/*container */}

                <div 
                  className="
                     w-full
                     max-w-[1180px]
                     mx-auto
                     my-24
                     
                     text-[#1e293b]                   
                  ">
                  
                     

                    <div 
                       className="
                         grid
                         md:grid-cols-2
                         gap   
                         
                    ">  
                    <aside>
                        <h1 className="text-4xl font-bold my-12">
                           Why Choose Us
                        </h1>
                        <h2 className="">A Different Way to Solve Business Challenges</h2>
                     </aside> 

                    <div className="grid lg:grid-cols-2 gap-4"> 


                        <article 
                           className="
                              w-full
                              text-lg
                              space-y-6
                              border
                              border-black/10 
                              rounded
                              p-4
                                 ">
                                 
                                 
                                    <h2 className="font-bold">
                                       Business Bofore Technology
                                    </h2>
                                    <p className="leading-relaxed">
                                       Before recommending a solution, we take time to understand the business, 
                                       its processes, and the challenges it is trying to solve.
                                    </p>
                                 
                              </article>
                              
                              <article 
                                 className="
                                    w-full
                                    text-lg
                                    space-y-6
                                    border
                                    border-black/10 
                                    rounded
                                    p-4

                                 ">
                                    
                                    
                                       <h2 className="font-bold">
                                       Solving Real Business Challenges
                                       </h2>
                                       <p className="">
                                          Every solution is developed with a clear business objective. 
                                          Our focus is on addressing operational challenges, improving 
                                          efficiency, and delivering value.
                                       </p>
                                    
                           </article>

                           <article 
                                 className="
                                    w-full
                                    text-lg
                                    space-y-6
                                    border
                                    border-black/10 
                                    rounded
                                    p-4
                                 ">
                                    <h2 className="font-bold">
                                    Tailored Solutions
                                    </h2>
                                    <p className="">
                                       Our solutions are designed around 
                                       existing business processes so they naturally become part of daily 
                                       operations.
                                    </p>
                           </article>
                           <article 
                                 className="
                                    w-full
                                    text-lg
                                    space-y-6
                                    border
                                    border-black/10 
                                    rounded
                                    p-4
                                 ">
                                    <h2 className="font-bold text-[#03045e]">
                                       Lasting Partnership
                                    </h2>
                                    <p className="">
                                       After delivery, we continue supporting our clients as their businesses evolve.
                                    </p>
                           </article>
                        </div> 
                    
                     </div> 

                  </div>

            </section>
      )
}

export default WhyUs;