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
                      shadow-sm 
                      shadow-[#03045e]/10 
                      border 
                      border-[#03045e]/15
                      bg-white 
                      p-6 
                      rounded-md 
                      space-y-4 
                      hover:scale-101 
                      transition-all 
                      duration-1000"
                  >
                  <header>
                    <div class="w-fit sm:p-2 p-3  bg-black/2 border border-black/4 rounded-full my-4">
                       <Icon className="size-7 text-blue-900/80"/>
                    </div>
                    <h3 className="text-xl  font-bold">{title}</h3>
                  </header>
                  <p className="text-lg  text-bla ck/80">
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
                  <footer className="absolute bottom-0 pb-6  w-fit flex flex-col gap-2 items-start font-bold text-blue-700">
                    <Link href="/services/business-process-automation"
                       className="
                          font-semibold 
                          md:opacity-0 
                          md:group-hover:opacity-100 
                          transition-all 
                          duration-1000 
                          flex 
                          items-center 
                          gap-2">
                       Explore more
                       <HiArrowRight className="size-4 "/>
                    </Link>
                  </footer>
              </article>
       )
}
export default ServicesCard;