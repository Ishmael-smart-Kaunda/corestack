

const AboutUs = () =>{
       return(
             <section 
                id="about-us"
                className="
                  w-full
                  
                  
                  px-6
                  md:px-0
                  text-[#1e293b]
                  bg-gray-100
                   
            ">
               <div 
                  className="
                     max-w-[1180px]
                     mx-auto
                     grid
                     md:grid-cols-2
                     gap-x-8
                     gap-y-6
                     p-16
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
                      text-black
                      
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
                      flex
                      rounded-md 
                 "> 
                    {/*supporting cards container */}
                     <div 
                       className="
                        w-full
                        m-auto
                        self-end
                        grid
                        grid-cols-2
                        
                        gap-4
                        gap-y -6 
                     ">
                      <div className="space-y-2 shadow-sm shadow-yellow-500/20 border border-black/10 rounded px-5 py-2">
                         <h3 className="text-[14px]  font-bold text-yellow-600">
                             Business First
                         </h3>
                         <p className="text-black">
                             Technology decisions guided by business objectives.
                         </p>
                      </div>

                      <div className="space-y-2 shadow-sm shadow-yellow-500/20 border border-black/10 rounded px-5 py-2">
                         <h3 className="text-[14px]  font-bold text-yellow-600">
                             Practical Innovation
                         </h3>
                         <p className="text-black">
                             Solutions designed for real-world operations.
                         </p>
                      </div>

                      <div className="space-y-2 shadow-sm shadow-yellow-500/20 border border-black/10 rounded px-5 py-2">
                         <h3 className="text-[14px]  font-bold text-yellow-600">
                             Long-Term Partnership
                         </h3>
                         <p className="text-black">
                             We grow alongside the businesses we serve.
                         </p>
                      </div>
                    </div>
                  </aside>
                 </div>
            </section>
       )
}

export default AboutUs;