import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";



const ServicesCard = ({id, icon, title, description, deliverables, businessImpact,cta }) =>{
        const Icon =icon
        return(
              <article className="
                      relative
                      group
                      w-full 
                      min-h-90
                      shad ow-sm 
                      sha dow-[#03045e]/10 
                      bord er 
                      bord er-[#03045e]/15
                      bg-white 
                      p-6 
                      rounded-3xl md 
                      space-y-4 
                      hover:scale-101 
                      transition-all 
                      duration-1000"
                  >
                  <header>
                    <div className="w-fit sm:p-2 p-3  bg-black/2 border border-black/4 rounded-full mb-8">
                       <Icon className="size-7 text-blu e-800 /80"/>
                    </div>
                    <h3 className="
                          text-xl  
                          font-semibold
                          tracking-wide
                          my-6
                          ">
                       {title}
                    </h3>
                  </header>
                  <p className="text-[1.1rem] font-light  leading-[1.9rem]">
                      {description}
                  </p>
                  <p className="hidden text-xl font-semibold">
                      Deliverable solutions
                  </p>
                  <ul className="hidden px-5 space-y-1 ">
                     {deliverables.map((deliverable)=>
                            <li key={deliverable}
                               className="text-sm md:text-base font-semibold list-disc"
                              >
                              {deliverable}
                            </li>
                       )}
                  </ul>
                  <footer className="absolute bottom-0 pb-6  w-fit flex flex-col gap-2 items-start font-bold text-blue-900">
                    <Link href="/services/business-process-automation"
                       className="
                          font-semibold 
                          md:opacit y-0 
                          md:group-hover:opac ity-100 
                          transition-all 
                          duration-1000 
                          flex 
                          items-center 
                          gap-2">
                       Explore more
                       <HiArrowRight className="size-4 group-hover:translate-x-2 transition-all duration-1000"/>
                    </Link>
                  </footer>
              </article>
       )
}
export default ServicesCard;