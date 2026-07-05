

const Member = ({img, name, role, description, social}) =>{
    
    const {Facebook, LinkedIn, Twitter} = social
    
    
    return(       
            <article  
                className="
                relative  
                w-full
                h-full
                borde r
                flex
                flex-col
                md:flex-row
                
                overflow-hidden
                
            ">
                <figure 
                className="
                    md:h-80
                    md:w-6/10
                    rounded- full
                    md:rounded-lg
                    overflow-hidden
                    bor
                ">
                <img src={img} 
                        alt="Ishmael Kaunda's Image" 
                        className="h-full object-cover rounded md: rounded-lg" />
                </figure>
                <div 
                    className="
                    
                    md:-translate-x-6
                    md:h-[90%]
                    my-auto
                    md:w-6/10
                    md:shadow
                    bg-white
                    md:border
                    border-black/10
                    rounded-2xl
                    py-4
                    md:px-4
                    space-y-2
                ">
                    <p className="font-bold">
                    {name}
                    </p>
                    <p className="text-[12px] font-semibold">
                    {role}
                    </p>
                    <p className="">
                    {description}
                    </p>
 
                    <span className="flex items-center gap-4">
                        <LinkedIn size={24} className="cursor-pointer"/>
                        <Facebook size={24} className="cursor-pointer"/>
                        <Twitter size={24} className="cursor-pointer"/>
                    </span> 
                </div>

            </article>
       )
}

export default Member;