

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
                justify-between
                md:flex-row
                gap-6
                p- 4
                
                
            ">
                
                <div 
                    className="
                    space-y-4
                    p-6
                ">
                    <p className="text-[1.5rem] font-bold">
                    {name}
                    </p>
                    <p className="text-[0.8rem] text-yellow-600 font-semibold">
                    {role}
                    </p>
                    <p className="font-light  text-[1.1rem]">
                    {description}
                    </p>
 
                    <div className="flex items-center gap-6 -translate-x-1 bg- text-gray-600 [#03045e] borde r border-gray-600/10 -2 yellow-900 w-fit">
                        <LinkedIn size={26} className="cursor-pointer"/>
                        <Facebook size={26} className="cursor-pointer"/>
                        <Twitter size={26} className="cursor-pointer"/>
                    </div> 
                </div>
                <figure 
                className="
                    w-full 
                    h-fit
                    md:w-3/10
                    
                    md:h-full
                    
                    bg-gray-300
                    
                    shrink-0
                    overflow-hidden
                    
                
                ">
                <img src={img} 
                     alt={alt} 
                     className="w-full h-full object-cover" 
                />
                
                </figure>

            </article>
       )
}

export default Member;