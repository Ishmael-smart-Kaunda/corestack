import { BiBulb } from "react-icons/bi";
import { BsLayers, BsLightbulb, BsLightbulbFill, BsRocket, BsTrophy } from "react-icons/bs";
import { CgBulb } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { GiBulb, GiTargeted } from "react-icons/gi";
import { IoBulb, IoBulbSharp, IoSparkles } from "react-icons/io5";
import { LiaLightbulb, LiaLightbulbSolid } from "react-icons/lia";
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
                     text-[#1e293b]

                ">

                {/*mission & vission */}
                <div 
                   className="
                     grid
                     md:grid-cols-2
                     gap-6
                     font-normal
                     
                ">
                 <aside 
                   className="
                     w-full
                     
                  "> 
                  <article className="h-full shadow-sm shadow-[#03045e]/10 border border-[#03045e]/8 rounded p-6">
                     <header className="flex items-center gap-3">
                        <div className="p-1 rounded bg-[#03045e] text-[#f8fafc]">
                            <TbTargetArrow className="size-8"/>
                        </div>
                        <h1 className="text-3xl md:tex t-4xl font-bold text-[#03045e]">
                            Our Mission
                        </h1>
                     </header>
                     <p className="mt-6 text-lg">
                         To help businesses solve operational challenges through purposeful technology 
                         by delivering practical digital solutions that improve efficiency, simplify 
                         processes, and create measurable value.
                     </p>
                  </article>

                </aside>

                <aside className="">
                    <article className="h-full shadow-sm shadow-[#03045e]/10 border border-[#03045e]/8 rounded p-6">
                      <header className="flex items-center gap-3">
                        <div className="p-1 rounded bg-[#03045e] text-[#f8fafc]">
                            <TbBulb className="size-8"/>
                        </div>
                        <h1 className="text-3xl md:tex t-4xl font-bold text-[#03045e]">
                            Our Vision
                        </h1>
                      </header>
                     
                     <p className="mt-4 text-lg">
                         To become a trusted business solutions partner, helping organizations embrace 
                         technology with confidence and build stronger, more efficient, and future-ready 
                         operations.
                     </p>
                  </article>
                </aside>

                </div>



                

                {/*core values */}
                  <h1 className="text-3xl center mt-24 md:text-4xl font-bold">
                      Our Core Values
                  </h1>
                  <p 
                     className="
                      text -center 
                      tracking- [0.1rem] 
                      my-4 
                      font-semibold
                      text-[18px]
                      
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
                            rounded
                            border-black/10
                            h-full
                            space-y-3
                        "
                        >
                        <header className="flex flex-col lg:flex-row lg:items-center gap-3 text-[18px]">
                            <span className="w-fit p-2 rounded bg-[#03045e] text-white">
                                <BsLayers size={20}/>
                            </span>
                            <h1 className="font-bold">
                            Simplicity
                        </h1>
                        </header>
                        
                        
                        <p 
                        className="
                            relative
                        ">
                        We believe technology should simplify the work.
                        </p>
                       

                        <div 
                            className=" hidden
                            absolute
                            inset-0 
                            p-[2px]
                            bg-black/20   
                        "
                          style={{
                                clipPath: "polygon(0 40%, 30% 38%, 100% 40%, 30% 100%, 0 100%)",
                            }}>
                            
                        </div>
                        </article>

                        <article 
                          className="
                            relative
                            overflow-hidden
                            p-3
                            lg:p-6
                            border
                            rounded
                            border-black/10
                            h-full
                            space-y-3
                        ">
                        <header className="flex flex-col lg:flex-row lg:items-center gap-3 text-[18px]">
                            <span className="w-fit p-2 rounded bg-[#03045e] text-white">
                                <BsTrophy size={20}/>
                            </span>
                            <h1 className="font-bold">
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
                        

                        <div 
                            className=" hidden
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
                            p-3
                            lg:p-6
                            border
                            rounded
                            border-black/10
                            h-full
                            space-y-3
                        ">
                        <header className="flex flex-col lg:flex-row lg:items-center gap-3 text-[18px]">
                            <span className="w-fit p-2 rounded bg-[#03045e] text-white">
                                <BsRocket size={20}/>
                            </span>
                            <h1 className="font-bold">
                               Innovation
                            </h1>
                        </header>
                        <p 
                        className="
                          relative  
                        ">
                        We understand business needs then propose solution.
                        </p>
                        

                        <div 
                            className=" hidden
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
                            p-3
                            lg:p-6
                            border
                            rounded
                            border-black/10
                            h-full
                            space-y-3

                        ">
                        <header className="flex flex-col lg:flex-row lg:items-center gap-3 text-[18px]">
                            <span className="w-fit bg-[#03045e] p-2 rounded text-[#f8fafc]">
                                <FaUsers size={20}/>
                            </span>
                            <h1 className="font-bold">
                               Partnership
                            </h1>
                        </header>
                        <p 
                        className="
                            relative
                        ">
                        We value long-term relationships built on trust.
                        </p>
                        

                        <div 
                            className=" hidden
                            absolute
                            inset-0
                            w-full
                            p-[65px]
                            bg-black/20
                            clip-card
                        "
                        style={{
                                clipPath: "polygon(0 0, 30% 0, 90% 40%, 30% 100%, 0 100%)",
                            }}
                        
                        
                        >
                           
                        </div>
                        </article>

                       
                        
                        
                  </div>
                </div>

                </section>
         )
}

export default OurDirection;