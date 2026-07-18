

const FeaturedCard= ({img, alt, title, use, description,audience}) => {
        return(
                <article className="grid lg:grid-cols-2 gap-5 w-full  border roundexl p-4  rounded-2xl bg-[#222831] text-white">
                    
                  <div className="w-full space-y-3"> 
                      <h1 className="text-2xl md:text-3xl font-semibold">{title}</h1>
                      <p className="font-light text-sm">{use}</p>
                      <p className="">
                          {description}
                      </p>
                      <span className="font-semibold">Idea for : </span>
                      <div className=" flex gap-4 flex-wrap mt-8">
                        {audience.map((audience)=>
                            <p key={audience.id} 
                                className="border border-yellow-600/30 bg-yellow-600/10 p-2 rounded-xl">
                            {audience.title}
                            </p>
                        )}   
                      </div>
                  </div> 
                  <div className="md:hidden lg:relat ive  skew-y-2 w-full rounded-xl h-fit overflow-hidden">
                        <img src={img} alt={alt} className="-translate-y-5 object-cover " />
                  </div>
                </article>
        )
    }
export default FeaturedCard;