

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
                     max-w-screen-lg
                     mx-auto
                     
                     
                     my-24
                     rounded-md
                     lg:rounded-lg
                     space-y-6 
                     text-[#393E46]                   
                  ">
                   <h1 className="text-4xl font-bold my-12">
                        Why Choose Us
                    </h1>
                     

                    <div 
                       className="
                         grid
                         md:grid-cols-2
                         gap-6   
                         
                    ">     
                    <article 
                      className="
                         w-full
                         flex
                         flex-col
                         space-y-2
                         text-lg
                         border
                         border-black/5
                         shadow
                         rounded-md
                         p-3
                         space-y-3
                           ">
                            <h2 className="font-bold">
                                Business Before Technology
                            </h2>
                            <p className="">
                                We believe technology is only valuable when it helps businesses solve real 
                                challenges, improve operations, and create measurable outcomes.
                            </p>
                        </article>
                        
                        <article 
                            className="
                                w-full
                                flex
                                flex-col
                                space-y-2
                                text-lg
                                border
                                border-black/5
                                shadow
                                rounded-md
                                p-3
                                space-y-3
                             ">
                            <h2 className="font-bold">
                              Solutions Built With Purpose
                            </h2>
                            <p className="">
                               Every recommendation and solution is shaped by a clear understanding 
                               of your business, ensuring that every feature serves a meaningful 
                               objective.
                            </p>
                       </article>

                       <article 
                            className="
                                w-full
                                flex
                                flex-col
                                space-y-2
                                text-lg
                                border
                                border-black/5
                                shadow
                                rounded-md
                                p-3
                                space-y-3
                             ">
                            <h2 className="font-bold">
                              Practical, Not Complicated
                            </h2>
                            <p className="">
                               We focus on creating solutions that are intuitive, efficient, and 
                               practical—technology that simplifies the way businesses work rather 
                               than adding unnecessary complexity.
                            </p>
                       </article>
                       <article 
                            className="
                                w-full
                                flex
                                flex-col
                                space-y-2
                                text-lg
                                border
                                border-black/5
                                shadow
                                rounded-md
                                p-3
                                space-y-3
                             ">
                            <h2 className="font-bold">
                              A Partner In Growth
                            </h2>
                            <p className="">
                               Our commitment extends beyond delivery. We build lasting partnerships 
                               by supporting businesses as they adapt, grow, and embrace new opportunities.
                            </p>
                       </article>
                    
                     </div> 

                  </div>

            </section>
      )
}

export default WhyUs;