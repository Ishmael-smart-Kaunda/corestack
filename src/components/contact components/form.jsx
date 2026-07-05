import { Link } from "react-router-dom";



const ContactForm = () =>{
           return(
              <section className="w-full  px-6 md:px-0">
                  
                  <header className="w-full md:w-8/10 mx-auto text-center mb-8 text-[#393E46]">
                      <h2 className="font-semibold text-xl  tracking-[0.5px]">
                          Send us a message
                      </h2>
                      <p className="  text-md my-3">
                          Share your goals or challenges with us. 
                          We'll help you find the right path forward. 
                      </p>
                  </header>
                  <form action="" className="space-y-6 text-[#393E46]/80 font-semibold">
                     <fieldset className="flex flex-col md:flex-row gap-3 justify-between">
                        <label htmlFor="name" className="md:w-1/2 flex flex-col gap-3 font-semibold">
                            Name
                            <input 
                               type="text"
                               name="name" 
                               className="
                                   p-2 
                                   outline-none 
                                   rounded-md 
                                   border 
                                   border-[#393E46]/20
                                   text-[15px]
                                   placeholder:text-[#393E46]/80"
                               placeholder="Your Full Name"
                               
                            />
                        </label>
                        <label htmlFor="email" className="md:w-1/2 flex flex-col gap-3 font-semibold">
                            Email
                            <input 
                               type="text" 
                               name="email"
                               className="
                                  p-2 
                                  outline-none
                                  rounded-md  
                                  
                                  border 
                                  border-[#393E46]/30
                                  text-[15px]
                                  placeholder:text-[#393E46]/80
                                  "
                               placeholder="Your Email"
                               
                            />
                        </label>
                     </fieldset>

                     
                        <label htmlFor="subject" className="w-full flex flex-col gap-3 font-semibold">
                            Subject
                            <input 
                               type="text" 
                               name="subject"
                               className="
                                   p-2
                                   outline-none 
                                   rounded-md 
                                   border 
                                   border-[#393E46]/20
                                   text-[15px]
                                   placeholder:text-[#393E46]/80"
                               placeholder="The subject"
                               
                            />
                        </label>
                        <label htmlFor="message" className="w-full flex flex-col gap-3 font-semibold">
                            A short message
                            <textarea 
                               type="text"
                               name="message"
                               rows={2} 
                               className="
                                   p-2 
                                   outline-none 
                                   rounded-md 
                                   border 
                                   border-[#393E46]/20
                                   text-[15px]
                                   placeholder:text-[#393E46]/80"
                               placeholder="Briefly describe your issue..."
                               
                            />
                        </label>
                        <fieldset className="flex gap-4 justify-between">
                            <button 
                                type="submit" 
                                className="
                                    w-1/2
                                    rounded-lg 
                                    md:px-8 
                                    p-2
                                    text-base
                                    font-semibold 
                                    text-white
                                    transition-all
                                    duration-500
                                    bg-[#03045e]
                                    mt-4
                            ">
                                Send Your Message
                            </button>
                            <Link  
                              to='/'                              
                              className="
                                    flex
                                    justify-center
                                    items-center
                                    w-1/2
                                    rounded-lg 
                                    md:px-8 
                                    p-2
                                    text-base
                                    font-semibold 
                                    text-[#03045e]
                                    transition-all
                                    duration-500
                                    border
                                    border-[#03045e]/10
                                    shadow
                                    bg-white
                                    mt-4
                            ">
                                Back To Home
                            </Link>
                        </fieldset>
                  </form>
              </section>
           )

}

export default ContactForm;