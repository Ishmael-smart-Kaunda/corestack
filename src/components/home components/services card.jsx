import { HiArrowRight } from "react-icons/hi";




const ServicesCard = ({id, icon, title, description, deliverables, businessImpact,cta }) =>{
        const Icon =icon
        return(
              <article className="
                      group
                      w-full 
                      shadow-sm bg-white 
                      p-6 
                      rounded-md 
                      space-y-5 
                      hover:bg-blue-500/5
                      hover:scale -101 
                      transition-all 
                      duration-1000"
                  >
                  <header>
                    <div class="w-fit p-2 bg-[#0066FF]/5 rounded-full my-4">
                       <Icon className="size-7 text-[#0066FF] white"/>
                    </div>
                    <h3 className="text-[1.4rem] font-bold">{title}</h3>
                  </header>
                  <p className="text-[18px] font-semibold text-black/70">
                      {description}
                  </p>
                  <p className="text-[18px] text-sky-700 [#0066FF] font-semibold">
                      Deliverable solutions
                  </p>
                  <ul className="px-5 space-y-1 ">
                     {deliverables.map((deliverable)=>
                            <li key={deliverable}
                               className="text-[14px] font-semibold list-disc"
                              >
                              {deliverable}
                            </li>
                       )}
                  </ul>
                  <footer className="w-full flex gap-10 items-center">
                    <a href="/services/business-process-automation"
                       className="font-semibold">
                       Explore Solution
                    </a>
                    <HiArrowRight className="md:opacity-0 group-hover:opacity-100 group-hover:translate-x-[200%] size-4 transition-all duration-1000"/>
                  </footer>
              </article>
       )
}
export default ServicesCard;