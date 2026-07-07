import ContactForm from "./form";
import ContactInfor from "./contack info";

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
                    my-16
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
                       py-16 
                       h-fit
                       
                 ">
                    <figure 
                     className="
                        w-full
                        bg-white/80 
                        border-l
                        border-black/10
                        overflow-hidden
                     ">
                     <img 
                        src="https://i.pinimg.com/1200x/7a/c9/25/7ac92576ff5251c14241a34a73f8a707.jpg" 
                        alt="Contact Us" 
                        className="
                        object-cover 
                        w-full 
                        h-full 
                        opacity-30
                        " 
                      />
                    </figure>

                    </aside>
                    <ContactForm/>
                </section>
        )
}

export default Container;