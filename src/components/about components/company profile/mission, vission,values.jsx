import { BiBulb } from "react-icons/bi";
import { BsLightbulb, BsLightbulbFill } from "react-icons/bs";
import { CgBulb } from "react-icons/cg";
import { GiBulb, GiTargeted } from "react-icons/gi";
import { IoBulb, IoBulbSharp } from "react-icons/io5";
import { LiaLightbulb, LiaLightbulbSolid } from "react-icons/lia";
import { SiSimpleicons, SiSimplex } from "react-icons/si";
import { TbBulb, TbTargetArrow } from "react-icons/tb";


const OurDirection = () =>{
         return(
             <section 
                className="
                  w-full
                  bg-gray-200/50 
                  py-8 
                  px-6
                      
                ">
                {/*container */}
                <div 
                   className="
                     w-full
                     max-w-screen-lg
                     mx-auto
                     text-[#393E46]

                ">

                {/*mission & vission */}
                <div 
                   className="
                     grid
                     md:grid-cols-2
                     gap-6
                     text-[#393E46] font-normal
                     
                ">
                 <aside 
                   className="
                     w-full
                     
                  "> 
                  <article className="border border-black/10 bg-white shadow-sm rounded-md p-3 h-full">
                     <span className="flex items-center gap-3">
                        <TbTargetArrow className="size-10  rounded-md"/>
                        <h1 className="text-3xl font-bold">
                            Mission
                        </h1>
                     </span>
                     <p className="mt-4 text-lg">
                         To help businesses simplify operations, improve customer 
                         experiences, and achieve sustainable growth through practical 
                         digital solutions.
                     </p>
                  </article>

                </aside>

                <aside className="">
                    <article className="border border-black/10 bg-white shadow-sm rounded-md p-3 h-full">
                     <span className="flex items-end gap-3">
                        <TbBulb className="size-10 rounded-md"/>
                        <h1 className="text-3xl  font-bold text-baseline">
                            Vision
                        </h1>
                     </span>
                     <p className="mt-4 text-lg">
                         To become a trusted partner in business transformation by making 
                         technology more accessible, meaningful, and impactful for organizations 
                         across industries
                     </p>
                  </article>
                </aside>

                </div>

                {/*core values */}
                  <h1 className="text- center mt-24 text-3xl font-bold">
                      Our Core Values
                  </h1>
                  <p 
                     className="
                      text -center 
                      tracking- [0.1rem] 
                      my-4 
                      font-semibold
                      
                      ">
                     What Drives Our Company Forward
                  </p>
                  <div 
                    className="
                        w-full
                        
                        
                        grid
                        grid-cols-2
                        md:grid-cols-4
                        lg:grid- cols-5
                        gap-4
                        md:max -h-40
                        mt-16
                    ">
                    <article 
                        className="
                            relative
                            overflow-hidden
                            rounded-md
                            bg-[#03045e]/20
                            shadow-sm
                            shadow-white
                            p-3
                            border
                            border-black/5
                            h-full
                            space-y-3
                        ">
                        <h1 className="font-bold">
                            Simplicity
                        </h1>
                        <p 
                        className="
                            relative
                        ">
                        We believe technology should simplify the work.
                        </p>
                       

                        <div 
                            className="
                            absolute
                            bottom-0
                            right-0
                            p-[16px]
                            bg-[#03045e]/20
                            rounded-tl-full
                            
                        ">
                            
                        </div>
                        </article>

                        <article 
                          className="
                            relative
                            overflow-hidden
                            rounded-md
                            bg-[#03045e]/20
                            p-3
                            border
                            border-black/5
                            h-full
                            space-y-3
                        ">
                        <h1 className="font-bold">
                            Excellence
                        </h1>
                        <p 
                        className="
                           
                           text-red -900 
                           relative
                        ">
                        We value thoughtful execution and attention to the details.
                        </p>
                        

                        <div 
                            className="
                            absolute
                            bottom-0
                            left-0
                            p-[16px]
                            bg-[#03045e]/20
                            rounded-tr-full
                            z-50
                        ">
                            
                        </div>
                        </article>

                            <article 
                        className="
                            relative
                            overflow-hidden
                            rounded-md
                            bg-[#03045e]/20
                            p-3
                            border
                            border-black/5
                            h-full
                            space-y-3
                        ">
                        <h1 className="font-bold">
                            Business First
                        </h1>
                        <p 
                        className="
                          relative  
                        ">
                        We understand business needs then propose solution.
                        </p>
                        

                        <div 
                            className="
                            absolute
                            bottom-0
                            right-0
                            p-[16px]
                            bg-[#03045e]/20
                            rounded-tl-full

                        ">
                            
                        </div>
                        </article>

                        <article 
                          className="
                            relative
                            overflow-hidden
                            rounded-md
                            bg-[#03045e]/20
                            p-3
                            border
                            border-black/5
                            h-full
                            space-y-3
                        ">
                        <h1 className="font-bold">
                            Partnership
                        </h1>
                        <p 
                        className="
                            relative
                        ">
                        We value long-term relationships built on trust.
                        </p>
                        

                        <div 
                            className="
                            absolute
                            bottom-0
                            left-0
                            p-[16px]
                            bg-[#03045e]/20
                            rounded-tr-full

                        ">
                           
                        </div>
                        </article>

                        <article 
                          className="
                            relative
                            overflow-hidden
                            rounded-md
                            bg-[#03045e]/20
                            p-3
                            border
                            border-black/5
                            h-full
                            space-y-3
                        ">
                        <h1 className="font-bold">
                            Continuous Improvement
                        </h1>
                        <p 
                        className="
                            relative
                        ">
                          We keep learning, refining, and evolving 
                          alongside the businesses we serve.
                        </p>
                        

                        <div 
                            className="
                            absolute
                            bottom-0
                            left-0
                            p-[16px]
                            bg-[#03045e]/20
                            rounded-tr-full

                        ">
                           
                        </div>
                        </article>
                        
                        
                  </div>
                </div>

                </section>
         )
}

export default OurDirection;