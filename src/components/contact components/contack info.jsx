import { AiOutlineMail } from "react-icons/ai"
import { BiPhoneIncoming, BiPhoneOutgoing } from "react-icons/bi"
import { BsPhoneFill, BsPhoneVibrate, BsWhatsapp } from "react-icons/bs"
import { CiPhone } from "react-icons/ci"
import { FaPhone, FaWhatsapp } from "react-icons/fa6"
import { FiMail, FiPhone, FiPhoneOutgoing } from "react-icons/fi"
import { HiMail } from "react-icons/hi"
import { LuPhone } from "react-icons/lu"
import { MdMail, MdPhone } from "react-icons/md"
import { PiPhone, PiWhatsappLogo, PiWhatsappLogoFill } from "react-icons/pi"
import { RiMailFill, RiPhoneLine, RiWhatsappLine } from "react-icons/ri"
import { TbPhonePlus, TbPhoneRinging } from "react-icons/tb"



const ContactInfor = () =>{
         return(
               <section 
                   id="contact-info"
                   className="
                      w-full
                      py-16
                      px-6
                      bg-gray-200/50
                      border-t
                      border-2
                      border-white
                      
                      ">
                    <address 
                       className="
                          w-full
                          max-w-screen-lg
                          mx-auto
                          not-italic
                          
                          grid
                          md:grid-cols-2
                          lg:grid-cols-3
                          gap-6
                          text-[#393E46]/90

                     ">
                      {/*phone */}
                      <div 
                         className="
                           w-full
                           h-full
                           p-4
                           bg-white
                           rounded-md
                           md:rounded-xl
                           space-y-4
                      ">
                        <FiPhone className="size-6"/>
                        <a href="tel:+265887914433" className="font-extrabold text-lg">
                             +265 887 914 433
                        </a>
                        <p className="text-sm font-semibold my-2">Speak With Us</p>

                      </div>
                      {/*WhatsApp */}
                      <div 
                         className="
                           w-full
                           h-full
                           p-4
                           bg-white
                           rounded-md
                           md:rounded-xl
                           space-y-4
                      ">
                        <BsWhatsapp className="size-6"/>
                        <a href="tel:+265981457286" 
                           className="font-extrabold text-lg
                         ">
                             +265 981 457 286
                        </a>
                        <p className="text-sm font-semibold my-2">
                            Start A Conversation
                        </p>

                      </div>
                      {/*WhatsApp */}
                      <div 
                         className="
                           w-full
                           h-full
                           p-4
                           bg-white
                           rounded-md
                           md:rounded-xl
                           space-y-4
                      ">
                        <FiMail className="size-6"/>
                        <a href="mailto:+265981457286" 
                           className="font-extrabold text-lg
                         ">
                             sales.corestack.com
                        </a>
                        <p className="text-sm font-semibold my-2">
                            Send Your Inquiry
                        </p>

                      </div>
                     

                    </address>


               </section>
         )
}

export default ContactInfor