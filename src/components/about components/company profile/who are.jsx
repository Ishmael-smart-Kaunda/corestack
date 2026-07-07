

const AboutUs = () =>{
       return(
             <section 
                id="about-us"
                className="
                  w-full
                  
                  
                  px-6
                  md:px-0
                  text-[#1e293b]
                   
            ">
               <div 
                  className="
                     max-w-[1180px]
                     mx-auto
                     grid
                     md:grid-cols-2
                     gap-6
                     my-16
               ">
                 <aside 
                    className="
                      w-full
                      h-full
                      
                      rounded-md
                      space-y-8
                 ">
                  <h1 
                    className="
                      w-fit
                      text-3xl 
                      md:text-4xl 
                      font-bold 
                     
                    ">
                     About CoreStack
                  </h1>
                  <p className="font-semibold text-[18px]">
                    Creating Digital Tools That Support Organizations' Operations.
                  </p>
                  <p 
                    className="
                      text-lg
                      lg:text-[22px]
                      leading-relaxed
                      lg:font-light
                      
                    ">
                     CoreStack is a business solutions company that helps organizations solve 
                     operational challenges through purposeful technology. We work with businesses 
                     to understand how they operate, identify opportunities for improvement, and 
                     design digital solutions that simplify processes, strengthen efficiency, and 
                     support sustainable growth. Every solution we deliver is guided by a clear 
                     business objective. 
                  </p>
                  <p 
                    className="
                      text-lg
                      
                    ">
                    
                  </p>

                 </aside>

                 {/*right side */}
                 <aside 
                    className="
                      w-full
                      h-full
                      
                      rounded-md
                      flex
                      flex-col
                      justify-end
                 
                 "> 
                    {/*supporting cards container */}
                    <div 
                      className="
                        w-full
                        lg:w-8/10
                        self-end
                        grid
                        grid-cols-2
                        
                        gap-x-3
                        gap-y-6 
                    ">
                     <span className="space-y-2 shadow-sm shadow-[#03045e]/10 border border-[#03045e]/20 rounded p-3">
                         <h3 className="font-bold text-[#03045e]">
                             Business First
                         </h3>
                         <p className="">
                             Technology decisions guided by business objectives.
                         </p>
                     </span>

                     <span className="space-y-2 shadow-sm shadow-[#03045e]/10 border border-[#03045e]/20 rounded p-3">
                         <h3 className="font-bold text-[#03045e]">
                             Practical Innovation
                         </h3>
                         <p className="">
                             Solutions designed for real-world operations.
                         </p>
                     </span>

                     <span className="space-y-2 shadow-sm shadow-[#03045e]/10 border border-[#03045e]/20 rounded p-3">
                         <h3 className="font-bold text-[#03045e]">
                             Long-Term Partnership
                         </h3>
                         <p className="">
                             We grow alongside the businesses we serve.
                         </p>
                     </span>

                    </div>

                 </aside>

                </div>


             </section>
       )
}

export default AboutUs;