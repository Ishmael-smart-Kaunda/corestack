
const Hero = () =>{
         return(
               <section 
                  className="
                     
                     w-full 
                     h-[100vh] 
                     md:h-[90vh] 
                     
                     py-8
                     mt-12
                     flex
                     px-6
               ">
                {/*bg img */}
                <img 
                  src=""
                  alt="Contact Background Image" 
                  className="
                     hidden
                      
                     object-cover
                  " 
                />
                <div 
                   className="
                      py-6
                      rounded-xl
                      flex
                      flex-col
                      items-center
                      justify-center
                      w-full 
                      md:h-8/10
                      max-w-screen-lg
                      m-auto
                      border
                      border-white
                      text-center
                      text-white/80
                      space-y-8
                      lg:px-8
                      bg-[#222831]
               ">
               <span 
                  className="
                   tracking-widest
                   uppercase
                   text-xs

                  ">
                  Your Next Move
               </span>
               <h1 
                  className="
                     text-4xl
                     md:text-5xl
                     font-extrabold
                     
                    ">
                   Let's Start the Conversation
               </h1>
               <p 
                  className="
                    text-xl  
                 ">
                  Whether you're exploring a new digital solution, 
                  improving existing operations, or looking to solve a 
                  business challenge, we're ready to listen, understand, 
                  and help you move forward.

              </p>
              {/*button for scrolling down */}
              <button 
                 className="
                   cursor-pointer
                   px-8
                   shadow
                   shadow-[#03045e]
                   py-4
                   rounded-md
                   bg-[#03045e]
                  font-bold
             ">
               Start Right Here
              </button>
             </div>

            </section>
         )
}

export default Hero