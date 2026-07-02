import { FaChevronCircleDown } from "react-icons/fa";
import { useState } from "react";
import Question from "./question";
import questions from "../../data/questions";
import { Link } from "react-router-dom";



export default function FAQ(){
                  
                {/*stte for mobile nav accordion */}
                const [isExpanded, setIsExpanded]=useState(1)
                const toggleExpansion =(id)=>{
                      
                     setIsExpanded(isExpanded===id ? null : id)
                    console.log(id)
                }

                
                   return(
                         <section className="
                                     w-full 
                                     max-w-screen-lg 
                                     my-24
                                     mx-auto
                                     px-6
                                     md:px-0
                                     ">
                              <header className="text-center pb-4">
                                    <h2 className="text-3xl md:text-4xl font-bold my-3">
                                       
                                    </h2>
                                    <p className="text-lg text-black/80">
                                      
                                    </p>
                             </header> 

                             <div className="grid md:grid-cols-2 gap-16 w-full py-5 text-[18px]">
                                <aside 
                                   className="
                                       w-full 
                                       
                                       md:sticky 
                                       md:top-30 
                                       self-start
                                       h-fit 
                                       
                                       rounded-xl
                                       py-3
                                       
                                       "
                                 >
                                 
                                 <h2 
                                 className="
                                    text-2xl 
                                    md:text-3xl 
                                    font-bold 
                                    my-3 
                                    
                                    leading-tight
                                    my-3
                                    ">
                                    Frequently 
                                    <br/>
                                    Asked Questions
                                 </h2>
                                 <p 
                                 className="
                                  
                                    "
                                 >
                                    Some of the most common questions that we receive
                                    from our clients. 
                                    
                                 </p>
                                 <div 
                                    className="
                                        w-full
                                        hidden 
                                        md:block 
                                        mt-16
                                        h-fit
                                        space-y-4
                                        border
                                        border-dotted
                                        border-[#03045e]/30 
                                        shad ow-sm
                                        shad ow-[#03045e]/10
                                        rounded-xl
                                        p-3"
                                 >
                                 <h3 className="text-lg md:text-xl font-semibold">
                                    Still have questions?
                                    <br/>
                                 </h3>
                                 <p className="">
                                       Our support team is always ready to respond to your 
                                       inquiries.
                                 </p>
                                 <Link to="/contact" 
                                       className="
                                          text-[#03045e] 
                                          font-semibold
                                          hover:underline
                                          ">
                                    Contact Us
                                 </Link>


                                 </div>

                                </aside>
                                <aside className="w-full">
                                    {
                                       questions.map((item)=>(
                                          <Question 
                                             key={item.id} 
                                             {...item}
                                             handleExpansion={toggleExpansion}
                                             isExpanded={isExpanded}
                                          />
                                          ))              
                                    }
                              </aside>
                              

                             </div>

                             {/* faq cta for mobile devices */}
                             <div 
                                    className="
                                        w-full
                                        md:hidden 
                                        mt-6
                                        h-fit
                                        space-y-4
                                        border
                                        border-dotted
                                        border-[#03045e]/30
                                        rounded-xl
                                        p-3"
                                 >
                                 <h3 className="text-lg md:text-xl font-semibold">
                                    Still have questions?
                                    <br/>
                                 </h3>
                                 <p className="">
                                       Our support team is always ready to respond to your 
                                       inquiries.
                                 </p>
                                 <Link to="/contact" 
                                       className="
                                          text-[#03045e] 
                                          font-semibold
                                          hover:underline
                                          ">
                                    Contact Us
                                 </Link>


                                 </div>


                         </section>
                   )
}