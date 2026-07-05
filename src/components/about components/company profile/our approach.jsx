import { PiNumberOne } from "react-icons/pi";


const Approach = () =>{
        return(
            <section 
               className="
                  w-full
                  text-[#393E46]   
              "> 
                <h1 className=" text-4xl font-bold text-center my-6">
                     How We Work
                </h1>
                {/*container */}
                <div 
                  className="
                    w-full
                    max-w-screen-lg
                    mx-auto
                    px-6
                    mt-24
                    
                    text-lg
                    
                    grid
                    lg:grid-cols-[1fr_auto_1fr]
                    md:grid-rows-5
                    gap-x-6
                    
                    
                 
                 ">
                   <article className="hidden w-full h-fit flex justify-end py-4 space-y-3">
                        <div className="size-15 flex items-center justify-center p-6 rounded-full border font-bold">
                            01
                        </div> 
                   </article>

                   {/*Vertical line*/}
                   <article 
                       className="
                         hidden
                         md:block
                          
                          md:col-start-2
                          md:sticky 
                          top-28 
                          w-[3px]
                          rounded-full
                          h-30 
                          bg-[#03045e]
                          shadow
                          shadow-md
                          shadow-red-900

                    "/>
                   
                   <article className=" 
                               md:col-start-3 
                               w-full 
                               h-fit 
                               p-4 
                               border-dotted 
                               rounded-md 
                               space-y-3 
                               
                               text-lg
                               "
                        >
                        <div 
                            className="
                                size-12  
                                flex 
                                items-center 
                                justify-center 
                                p-2 
                                bg-[#03045e] 
                                font-bold 
                                text-white 
                                rounded-full
                        ">
                            01
                        </div>
                        <h1 className="font-bold">
                            Understand The Business
                        </h1>
                        <p className="text-black">
                            Understanding comes before solutions. We begin by learning about 
                            the business, its goals, operations, challenges, and the environment 
                            in which it operates.
                        </p>
                        <p className="text-black">
                            This foundation allows us to focus on what matters most rather 
                            than making assumptions based on technology alone.
                        </p>

                   </article>
                   <article 
                        className="
                           md:col-start-1 
                           md:row-start-2 
                           flex flex-col 
                           md:text-end 
                           w-full 
                           h-fit 
                           p-6 border-dotted rounded-md space-y-3 
                        ">
                        <div className="size-12 md:self-end flex items-center justify-center p-2 bg-[#03045e] font-bold text-white rounded-full">
                            02
                        </div>
                        <h1 className="font-bold">
                            Identify Opportunities
                        </h1>
                        <p className="">
                            Beyond immediate challenges often lie opportunities for efficiency, 
                            growth, and better customer experiences. We take time to identify 
                            where meaningful improvements can create lasting value.
                        </p>
                        <p className="">
                            The objective is not simply to solve problems, but to uncover 
                            possibilities that support future growth.
                        </p>
                   </article>

                    
                   <article className="md:col-start-3 md:row-start-3 flex flex-col w-full h-fit p-6 bor der border-dotted rounded-md space-y-3 ">
                        <div className="size-12 flex items-center justify-center p-2 bg-[#03045e] font-bold text-white rounded-full">
                            03
                        </div>
                        <h1 className="font-bold">
                            Design The Solution
                        </h1>
                        <p className="">
                            Every solution is designed around the realities of the business it serves. 
                            Workflows, customers, teams, and objectives all influence the decisions 
                            we make.
                        </p>
                        <p className="">
                           We avoid unnecessary complexity and focus on solutions that are practical, 
                           scalable, and aligned with business goals.
                        </p>
                   </article>



                    <article className="md:col-start-1 md:row-start-4 flex flex-col md:text-end w-full h-fit p-6 b order border-dotted rounded-md space-y-3 ">
                        <div className="size-12 md:self-end flex items-center justify-center p-2 bg-[#03045e] font-bold text-white rounded-full">
                            04
                        </div>
                        <h1 className="font-bold">
                            Deliver
                        </h1>
                        <p className="">
                            Successful delivery goes beyond launching a product or system. Our focus remains on creating outcomes that improve operations, strengthen customer experiences, and support business performance.
                        </p>
                        <p className="">
                            Technology becomes valuable when it creates measurable impact in everyday operations.
                        </p>
                   </article>


                   <article className="hidden md:col-start-1 md:row-start-5 w-full h-fit flex flex-col">
                        <div className=" size-15 self-end flex items-center justify-center p-6 rounded-full border font-bold">
                            05
                        </div> 
                   </article>

                   <article className="md:col-start-3 md:row-start-5 flex flex-col w-full h-fit p-6 bord er border-dotted rounded-md space-y-3 ">
                        <div className="size-12 flex items-center justify-center p-2 bg-[#03045e] font-bold text-white rounded-full">
                            05
                        </div>
                        <h1 className="font-bold">
                            Support Growth
                        </h1>
                        <p className="">
                            Businesses evolve, markets shift, and new opportunities emerge. 
                            The systems that support organizations should be capable of evolving 
                            alongside them.
                        </p>
                        <p className="">
                            We see solutions as foundations for growth rather than finished destinations.
                        </p>
                   </article>

                   

                    

                </div>
            

            </section>
        )
}

export default Approach;