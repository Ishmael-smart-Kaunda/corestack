import ContactForm from "./form";
import ContactInfor from "./contack info";
import logo from '../../assets/logo/favicon.png'
const Container = () =>{
        return(
               <section 
                  className="
                    w-full 
                    max-w-[1180px] 
                    mx-auto
                    grid 
                    md:grid-cols-2
                    gap-12
                    
                    rounded-3xl
                    min-h-100
                    my-8
                    "
                >
                <aside 
                    className="
                       hidden
                     
                       md:block
                       md:sticky
                       md:top-10
                       w-full 
                       rounded-3xl 
                       overflow-hidden 
                       bg-gray-50 [#222831]/50 black yellow-800
                       h-full
                           
                 ">
                     <div className=" w-full h-full flex flex-col items-center justify-center">
                        <h1 className="m-auto w-1/2 text-[3rem] text-center text-[#222831] font-extrabold">
                             We'll be in touch
                        </h1>
                     </div>
                    </aside>
                    <ContactForm/>
                </section>
        )
}

export default Container;