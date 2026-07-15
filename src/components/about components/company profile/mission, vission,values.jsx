import { BiBulb } from "react-icons/bi";
import { BsLayers, BsLightbulb, BsLightbulbFill, BsRocket, BsTrophy } from "react-icons/bs";
import { CgBulb } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { GiBulb, GiTargeted } from "react-icons/gi";
import { IoBulb, IoBulbSharp, IoSparkles } from "react-icons/io5";
import { LiaLightbulb, LiaLightbulbSolid } from "react-icons/lia";
import { LuRocket, LuUsers } from "react-icons/lu";
import { MdRocket } from "react-icons/md";
import { SiSimpleicons, SiSimplex } from "react-icons/si";
import { TbBulb, TbTargetArrow } from "react-icons/tb";


const OurDirection = () =>{
         return(
             <section 
                className="
                  w-full
                  bg-[#f8fafc] 
                  py-8 
                  lg:py-16
                  px-6
                      
                ">
                {/*container */}
                <div 
                   className="
                     w-full
                     max-w-[1180px]
                     mx-auto
                     text-black [#1e293b]

                ">

                {/*mission & vission */}
                <div 
                   className="
                     grid
                     md:grid-cols-2
                     gap-6
                     md:gap-0
                     font-normal
                     tracking-wide
                ">
                 <aside 
                   className="
                     w-full
                     text-black
                  "> 
                  <article className="h-full border border-[#03045e]/8 p-6">
                     <header className="flex items-center gap-3">
                        {/*<div className="hidden  text-yellow-800 [#f8fafc]">
                            <TbTargetArrow className="size-12"/>
                        </div>*/}
                        <h1 className="text-3xl md:tex t-4xl font-bold text-black yellow-800 -[#03045e]">
                            Our Mission
                        </h1>
                     </header>
                     <p className="mt-6 text-lg leading-relaxed">
                         To help businesses solve operational challenges through purposeful technology 
                         by delivering practical digital solutions that improve efficiency, simplify 
                         processes, and create measurable value.
                     </p>
                  </article>

                </aside>

                <aside className="text-black">
                    <article className="h-full border border-[#03045e]/8 p-6">
                      <header className="flex items-center gap-3">
                        {/*<div className="hidden text-yellow-800 -[#f8fafc]">
                            <TbBulb className="size-12"/>
                        </div>*/}
                        <h1 className="text-3xl md:tex t-4xl font-bold  -yellow-800 -[#03045e]">
                            Our Vision
                        </h1>
                      </header>
                     
                     <p className="mt-4 text-lg leading-relaxed">
                         To become a trusted business solutions partner, helping organizations embrace 
                         technology with confidence and build stronger, more efficient, and future-ready 
                         operations.
                     </p>
                  </article>
                </aside>

                </div>



                

                {/*core values */}
                  <h1 className="text-3xl center mt-24 md:text-4xl font-bold">
                      Our Values
                  </h1>
                  <p 
                     className="
                      text -center 
                      tracking- [0.1rem] 
                      my-8
                      
                      text-[16px]
                      text-yellow-900
                      uppercase
                      
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
                            p-3
                            lg:p-6
                            border
                            
                            border-black/10
                            h-full
                            space-y-3
                        "
                        >
                        <header className="flex flex-col lg:flex-row lg:items-center gap-3 text-[18px]">
                            <span className="w-fit rounded bg -[#03045e] text- white">
                                <BsLayers size={20}/>
                            </span>
                            <h1 className="font-semibold">
                            Simplicity
                          </h1>
                          </header>
                          <p 
                            className="
                                relative
                            ">
                            We believe technology should simplify the work.
                          </p>
                        </article>

                        <article 
                          className="
                            relative
                            overflow-hidden
                            p-3
                            lg:p-6
                            border
                            
                            border-black/10
                            h-full
                            space-y-3
                        ">
                        <header className="flex flex-col lg:flex-row lg:items-center gap-3 text-[18px]">
                            <span className="w-fit  ">
                                <BsTrophy size={20}/>
                            </span>
                            <h1 className="font-semibold">
                            Excellence
                        </h1>
                        </header>
                        
                        <p 
                        className="
                           
                           text-red -900 
                           relative
                        ">
                        We value thoughtful execution and attention to the details.
                        </p>
                        </article>

                            <article 
                        className="
                            relative
                            overflow-hidden
                            p-3
                            lg:p-6
                            border
                            
                            border-black/10
                            h-full
                            space-y-3
                        ">
                        <header className="flex flex-col lg:flex-row lg:items-center gap-3 text-[18px]">
                            <span className="">
                                <LuRocket size={20}/>
                            </span>
                            <h1 className="font-semibold">
                               Innovation
                            </h1>
                        </header>
                        <p 
                        className="
                          relative  
                        ">
                        We understand business needs then propose solution.
                        </p>
                        </article>

                        <article 
                          className="
                           relative
                            overflow-hidden
                            p-3
                            lg:p-6
                            border
                            
                            border-black/10
                            h-full
                            space-y-3

                        ">
                        <header className="flex flex-col lg:flex-row lg:items-center gap-3 text-[18px]">
                            <span className="w-fit ">
                                <LuUsers size={20}/>
                            </span>
                            <h1 className="font-semibold">
                               Partnership
                            </h1>
                        </header>
                        <p 
                        className="
                            relative
                        ">
                        We value long-term relationships built on trust.
                        </p>
                        </article>

                       
                        
                        
                  </div>
                </div>

                </section>
         )
}

export default OurDirection;