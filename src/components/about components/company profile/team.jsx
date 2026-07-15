import { LiaFacebook, LiaLinkedin, LiaTwitter } from "react-icons/lia";
import smart from '../../../assets/images/team/smart.png'
import members from "../../../data/members";
import Member from "./member card";

const Team = () =>{
       return(
              <section 
                 className="
                    w-full
                    px-6
                    text-[#191b1c]
                    py-24 
                    bg-white 
                ">
                    <header 
                       className="
                          w-full
                          max-w-[1180px]
                          mx-auto
                    ">
                     <div className="hidden  w-30 h-2 bg-[#03045e] mb-6"/>
                     <h1 className="text-4xl font-bold my-8 text-[#]">
                        Meet Our Team
                    </h1>
                    <p className="text-[1.2rem] font-light md:w-7/10">
                        Behind every solution is a team committed to understanding your business 
                        and solving real challenges. We bring together different skills and 
                        perspectives to design practical technology that supports your goals.
                    </p>
                    </header>
                    

                    {/*container */}
                    <div 
                       className="
                          w-full
                          max-w-[1180px]
                          mx-auto
                          grid 
                          md:grid-cols-2 
                          gap-6
                          my-16
                    ">
                        {
                            members.map((member)=>
                              <Member 
                                key={member.id}
                                {...member}
                              />  
                            )
                        }
                     
                         

                    </div>

                </section>
       )
}

export default Team;