



const ProcessCard = ({id, icon, title, description}) =>{
        const Icon = icon
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
                    <div className="w-fit sm:p-2 p-3  bg-black/2 border border-black/4 rounded-full my-4">
                       <Icon className="size-7 text-blue-900/80"/>
                    </div>
                    <h3 className="
                          text-xl  
                          font-semibold
                          
                          ">
                       {title}
                    </h3>
                  </header>
                  <p className="text-lg  text-bla ck/80">
                      {description}
                  </p>
              </article>
       )
}
export default ProcessCard;