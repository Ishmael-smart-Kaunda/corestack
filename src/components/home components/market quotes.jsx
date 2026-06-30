
import marketQuotes from "../../data/market quotes"
import Quote from "./quote";

const Quotes = () =>{
       return(
              <section className="w-full px-5 md:px-15 py-10">
                   <header className="py-10 my-10 space-y text-black /80">
                       <h2 className="text-[2.5rem] font-bold w-fit m x-auto">Market Insights</h2>
                           <p className="hidden w-full md:w-6/10 text -center text-[1.2rem] m x-auto">
                              Recurring business hurdles across retail sector
                           </p>
                   </header>
                   <div className="grid grid-cols-1 md:grid-cols-2 l id-cols-5 gap-4">
                         {
                            marketQuotes.map((item)=>
                              <Quote 
                                 key={item.key}
                                 {...item}
                               />
                            )
                         }
                   </div>
              </section>
       )
}
export default Quotes;