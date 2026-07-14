

const Member = ({img, alt, name, role, description, social}) =>{
    
    const {Facebook, LinkedIn, Twitter} = social
    
    
    return(       
            <article  
                className="
                 
                w-full
                h-full
                border
                border-black/10
                flex 
                flex-col
                md:flex-row
                gap-6
                p-4
                rounded-md
                
            ">
                <figure 
                className="
                    size-15 
                    border
                    border-black/10
                    border-2
                    bg-gray-300
                    rounded-full
                    shrink-0
                    overflow-hidden
                    
                
                ">
                <img src={img} 
                     alt={alt} 
                     className="w-full h-full object-cover" 
                />
                
                </figure>
                <div 
                    className="
                    space-y-4
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