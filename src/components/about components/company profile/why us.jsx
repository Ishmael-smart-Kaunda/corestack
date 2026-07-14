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
                     relative
                     min-h-150
                     overflow-hidden bg-black/90 text-white rounded-lg
                     mx-auto
                     p-3
                     lg:my-24   
                      
                     text-[#191b1c]   
                     flex
                                    
                  ">
                     {/*bg img */}
                     <img src="https://i.pinimg.com/736x/fb/5b/3a/fb5b3a2fdbe9d32c26dbe0bbfa5111c1.jpg" 
                              alt="corestack team" 
                              className="absolute inset-0 object-cover w-full mix-blend-overlay"
                      />
                  <div className="relative m-auto w-full space-y-24">
                     <header className="text-center space-y-6 text-white/60">
                           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold ">
                              Why Choose Us
                           </h1>
                           <h2 className="">A Different Way to Solve Business Challenges</h2>
                     </header>

                      <div className="
                           w-full
                           grid
                           md:grid-cols-2 
                           lg:grid-cols-3 
                           gap-4 
                            
                           md:px-6 
                           "> 
                        <article 
                           className="
                              w-full
                              text-lg
                              space-y-6
                              border
                              border-black/10 
                              text-white/50
                              bg-[#03045e]/20
                              backdrop-blur-[2px]
                              px-6
                              py-2
                           ">
                           <h2 className="font-bold text-yellow-500/70">
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
                           
                              text-white/50
                              bg-[#03045e]/20
                              backdrop-blur-[2px]
                              px-6
                              py-2
                           ">
                           <h2 className="font-bold text-yellow-500/70">
                                 
                                 Tailored Solutions
                           </h2>
                           <p className="">
                              
                              Our solutions are designed around 
                              existing business processes so they naturally become part of daily 
                              operations.
                           </p>     
                        </article>

                      { /* <article 
                           className="
                              hidden
                              w-full
                              text-lg
                              space-y-6
                              border
                              border-black/10 
                              
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
                        */}
                        <article 
                           className="
                              w-full
                              text-lg
                              
                              space-y-6
                              
                              text-white/50
                              bg-[#03045e]/20
                              backdrop-blur-[2px]
                              px-6
                              py-2
                           ">
                           <h2 className="font-bold text-yellow-500/70">
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