

const Quote = ({problem,insight}) =>{
        return(
              <article className="bg-black/90 text-white/90 rounded xl px-5 py-2 space-y-3">
                  <header>
                       <p className="text-[18px] font-bold text -sky-600">
                        {problem}
                     </p>                  
                  </header>
                  <p className="text-[18px]">
                        {insight}
                  </p>
              </article>
        )
}
export default Quote;