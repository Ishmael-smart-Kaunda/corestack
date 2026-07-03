import { useRef } from "react";







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
                {/*container */}
                <div 
                   className="
                      relative
                      rounded-md
                      md:rounded-xl
                      overflow-hidden
                      w-full 
                      h-[80vh]
                      md:h-full
                      max-w-screen-lg
                      flex
                      m-auto
                      bg-radial-[at_50%_75%] from-[#03045e]/80 to-[#000]/30

               "> 
               {/*bg img */}
                <img 
                  src="https://i.pinimg.com/1200x/1d/05/75/1d0575a8f30cef918f0d4db8c91b8718.jpg"
                  alt="Contact Background Image" 
                  className="
                     absolute
                     inset-0 
                     w-full
                     h-full
                     object-cover
                     mix-blend-overlay

                  " 
                />
                {/*overlay */}
                <div className="absolute inset-0 bg-black/60 w-full h-full"/>
                {/*content */}
               <div 
                  className="
                     
                     
                     relative
                     flex
                     flex-col
                     m-auto
                     items-center
                     justify-center
                     text-center
                     text-white/80
                     space-y-8
                     lg:px-8
                     
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
                        lg:text-6xl
                        font-extrabold
                        
                     ">
                     Let's Start the Conversation
                  </h1>
                  <p 
                     className="
                     text-xl  
                  ">
                     Building new a model, improving existing operations, or solving 
                     business challenges starts with a conversation. We're ready to 
                     understand your goals and help you move forward.

               </p>
               {/*button for scrolling down */}
               <a 
                  href="#contact-info"
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
               </a>
               </div>
             </div>
            </section>
         )
}

export default Hero