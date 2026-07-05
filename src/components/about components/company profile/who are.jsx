

const AboutUs = () =>{
       return(
             <section 
                id="about-us"
                className="
                  w-full
                  max-w-screen-lg
                  mx-auto
                  px-6
                  md:px-0
                   text-[#393E46]
            ">
               <div 
                  className="
                     grid
                     md:grid-cols-2
                     gap-4
                     my-16
               ">
                 <aside 
                    className="
                      w-full
                      h-full
                      
                      rounded-md
                      space-y-4
                 ">
                  <h1 
                    className="
                      w-fit
                      text-3xl 
                      md:text-4xl 
                      font-bold 
                     
                    ">
                     About 
                     <br/>
                     <b className="text-[#03045e]">CoreStack</b>
                     
                  </h1>
                  <p 
                    className="
                      text-lg
                      mt-16
                    ">
                     CoreStack is a business solutions company that partners with 
                     organizations to identify operational challenges, uncover 
                     opportunities, and implement technology that creates measurable 
                     impact. 
                  </p>
                  <p 
                    className="
                      text-lg
                      
                    ">
                    We believe technology delivers the most value when it serves 
                    business goals, not the other way around.
                  </p>

                 </aside>

                 {/*right side */}
                 <aside 
                    className="
                      w-full
                      h-full
                      
                      rounded-md
                      flex
                 
                 "> 
                    {/*supporting cards container */}
                    <div 
                      className="
                        w-full
                        m-auto
                        grid
                        grid-cols-2
                        
                        gap-x-3
                        gap-y-6 
                    ">
                     <span className="w-full flex flex-col gap-2 shadow-sm border border-black/10 rounded-md bg-white p-3">
                         <h3 className="font-semibold">
                             Business First
                         </h3>
                         <p className="">
                             Technology decisions guided by business objectives.
                         </p>
                     </span>

                     <span className="w-full flex flex-col gap-2 shadow-sm border border-black/10 rounded-md bg-white p-3">
                         <h3 className="font-semibold">
                             Practical Innovation
                         </h3>
                         <p className="">
                             Solutions designed for real-world operations.
                         </p>
                     </span>

                     <span className="w-full flex flex-col gap-2 shadow-sm border border-black/10 rounded-md bg-white p-3">
                         <h3 className="font-semibold">
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