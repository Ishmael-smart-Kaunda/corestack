import { FaChevronCircleDown } from "react-icons/fa";
import { useState } from "react";
import Question from "./question";
import questions from "../../data/questions";
import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";



export default function FAQ(){
                  
                {/*stte for mobile nav accordion */}
                const [isExpanded, setIsExpanded]=useState(1)
                const toggleExpansion =(id)=>{
                      
                     setIsExpanded(isExpanded===id ? null : id)
                    console.log(id)
                }

                
                   return(
                         <section 
                          className="
                              w-full 
                              
                              my-24
                              
                              px-6
                           ">
                           <div className="w-full max-w-[1180px] mx-auto">
                              <header className="text-center pb-4">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-3 ">
                                      Your Questions Answered
                                    </h2>

                                    <div className="h-[3px] w-1/10 bg-yellow-600 mx-auto my-6"/>

                                    <p className="text-[1.3rem] font-light text-black">
                                      Our team had to take time to respond to your frequent queiries.
                                      
                                    </p>
                             </header> 

                             <div className="w-full my-16">
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
                             </div>
                                <footer className="relative border border-black/20 bg-[#222831] overflow-hidden text-white w-full max-w-[1180px] mx-auto my-34 text-center py-6 px-2 md:p-12 rounded-4xl ">
                                    <svg  width="full" height="full" xmlns="http://www.w3.org/2000/svg"
                                           className="absolute inset-0 mix-blend-overlay">
                                           <defs>
                                              <pattern id="patt1" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                                                 <circle cx="1" cy="1" r="1" fill="" className="bg-yellow-600"/>
                                              </pattern>
                                           </defs>
                                           <rect width="100%" height="100%" x="0" y="0" fill="url(#patt1)" />
                                    </svg>


                                    <div className="relative space-y-8">
                             
                                       <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide">
                                           Still Have Questions?
                                       </h3>
                                      
                             
                                        <p className="max-w-3xl mx-auto mt-5 text-[1.3rem] font-light leading-relaxed">
                                          We are ready to answer your questions and help you understand 
                                          what might work best for your business.
                                       </p>
                             
                                       <div className="mt-8 flex justify-center">
                                       <Link
                                         to="/contact"
                                         className="
                                           group
                                           inline-flex
                                           items-center
                                           gap-8
                                           px-7
                                           py-3.5
                                           rounded-full
                                           bg-primary
                                            
                                           border
                                           bord er-2
                                           border-blue-600/20
                                           
                                           transition-all
                                           duration-300
                                           hover:shadow-lg
                                           hover:scale-105
                                           text-white
                                           bg-[#03045e] 
                                           font-bold
                                         "
                                       >
                                         Let's Discuss
                                        <span className="p-2 bg-white text-[#03045e] rounded-full group-hover:translate-x-3 transition-transform duration-1000 ">
                                             <LuArrowRight className="" />
                                        </span>
                                         
                                      </Link>
                                    </div>
                                   </div>
                                  </footer>
                           </div>
                         </section>
                   )
}