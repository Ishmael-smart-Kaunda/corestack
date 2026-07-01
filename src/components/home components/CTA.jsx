import { HiArrowRight, HiOutlineArrowCircleRight } from "react-icons/hi";
import { RiArrowRightCircleLine } from "react-icons/ri";


const CTA= ()=> {
  return (
    <section className="g-gray-900 p-6">
      <div className="
              relative 
              grid 
              grid-cols-1
              lg:grid-cols-3 
              gap-4 
              max-w-screen-lg 
              mx-auto 
              bg-black/70 
              rounded-3xl 
              overflow-hidden 
              p-4 
              md:p-8 
              
              ">
        
        <div className="lg:col-span-2  space-y-8">
            <h2 className="mt-6 text-3xl lg:text-4xl font-extrabold leading-tight text-white md:text-5xl">
              Ready To Moderenize Your Operations?
            </h2>

            <p className="mt-6 text-lg text-blue-100">
              Whether you need an online store, process automation, or a custom
              business platform, we help organisations identify opportunities
              and implement technology that delivers measurable results.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              

              <a
                href="/solutions"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Explore Our Solutions
              </a>
            </div>
          </div>
          {/**CTA FORM */}
          <div className="w-full h-full border border-white/20 rounded-xl p-4">
              <span className="text-white mx-auto block text-center font-bold text-lg mb-4">
                  Schedule a Consultation
              </span>
             <form action="" className="text-white/50">
                <label htmlFor="name" className="flex flex-col gap-3">
                  Name
                  <input 
                    type="text" 
                    id="name" 
                    className="
                       bg-gray-300/10 
                       placeholder:text-gray-400 
                       focus:ring-2 
                       focus:ring-blue-900/40  
                       focus:outline-none
                       p-2
                       rounded-md" 
                       placeholder="Your name
                       " 
                  />
                </label>
                <label htmlFor="email" className="flex flex-col gap-3">
                  Email
                  <input 
                      type="email" 
                      id="email" 
                      className="
                        bg-gray-300/10 
                        placeholder:text-gray-400 
                        focus:ring-2 
                        focus:ring-blue-900/40 
                        focus:outline-none
                        p-2
                        rounded-md" 
                        placeholder="Your email" 
                        />
                </label>
                <fieldset className="flex gap-2 w-full">
                    <label htmlFor="date" className="w-5/10 flex flex-col gap-3">
                      Date
                      <input 
                          type="date"
                          id="date"
                          className="
                            bg-gray-300/10 
                            placeholder:text-gray-400 
                            focus:ring-2 
                            focus:ring-blue-900/40 
                            focus:outline-none
                            p-2
                            rounded-md"
                      />
                    </label>    
                        <label htmlFor="time" className=" flex flex-col gap-3">
                          Time
                          <input  
                            type="time"
                            id="time"
                              className=" 
                              w-[81%] 
                              md:w-full  
                              bg-gray-300/10 
                              placeholder:text-gray-400 
                              focus:ring-2    
                              focus:ring-blue-900/40
                              focus:outline-none
                              p-2
                              rounded-md"   
                      />
                    </label>
                </fieldset>

                <label htmlFor="message" className="flex flex-col gap-3">
                 Message
                  <textarea 
                     id="message" 
                     rows={2} 
                    
                     className="
                       bg-gray-300/10 
                       placeholder:text-gray-400 
                       focus:ring-2 
                       focus:ring-blue-900/40 
                       focus:outline-none
                       p-2
                       rounded-md" 
                       placeholder="Your message"
                  />
 
                </label>
                <button 
                   
                   type="submit" 
                   className="
                      w-full
                      rounded-lg 
                      px-6 
                      py-3
                      text-base
                      text-white 
                      font-semibold 
                      text-blue-800 
                      transition 
                      bg-gray-300/50
                      mt-4">
                  
                  Send
                  
                </button>
             </form>

          </div>
      </div>
    </section>
  );
}

export default CTA;