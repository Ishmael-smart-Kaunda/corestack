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
                    text-[#393E46]
                ">
                    <h1 className="text-4xl font-bold my-6 text-center">Meet Our Team</h1>

                    {/*container */}
                    <div 
                       className="
                          w-full
                          max-w-screen-lg
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