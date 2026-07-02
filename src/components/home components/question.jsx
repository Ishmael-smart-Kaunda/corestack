import { FaChevronCircleDown } from "react-icons/fa";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { HiChevronDown, HiPlus } from "react-icons/hi2";
import { HiMinus } from "react-icons/hi";

                
      {/* A question component that structure the layout of question and answer. it accepts props for question and answer display
           and a function and a value/ state of expansion for each question */} 
      {/* the function and question expansion state value help in toggling expansion*/}         

export default function Question({id, Q, A, handleExpansion, isExpanded}){
                        return(
                                <div onClick={()=>handleExpansion(id)} 
                                     className=
                                        {`${id===isExpanded 
                                          ? 
                                          'bg-gray-100' 
                                          : ''
                                         } 
                                          transition-all 
                                          text-[14px]
                                          duration-500 
                                        cursor-pointer 
                                        w-full
                                        flex 
                                        flex -col 
                                        md:f lex-row 
                                        justify-between 
                                        gap-4 
                                        my-4 
                                        items-center  
                                        border 
                                        border-black/5 
                                        rounded-[3px] 
                                        shadow-sm
                                        shadow-black/10 
                                        
                                        p-3
                                        `}>
                                    <div className={`${id===isExpanded ? 'h-40 md:h-30 ' : 'h-10'} transition-all duration-500 overflow-hidden space-y-4`}>
                                            <h3 className="font-semibold text-[14px]">
                                             {Q}
                                             </h3>
                                            <p className={
                                                 `${id===isExpanded 
                                                  ? 
                                                  'opacity-100' 
                                                  : 'opacity-0'} 
                                                  transition-all 
                                                  text-[14px]
                                                  duration-500 
                                                  font-light 
                                                  opacity 
                                                  
                                                  `}
                                                >
                                                {A}
                                            </p>
                                    </div>
                                       <button className="self-start p-1 rounded-full text-[#03045e]">
                                         <HiChevronDown className={`size-5 shrink-0 transition-all`}/>
                                       </button>
                                     
                                </div>
                        )
}