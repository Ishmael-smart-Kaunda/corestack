import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import featuredProducts from "../../../data/featured products";

const FeaturedSolutions = () =>{
       return(
            <section className="w-full p-6 md:py-16">
               <div className="max-w-[1180px] mx-auto">
                    <header className="w-fit mx-auto text-center space-y-6 tracking-wide">
                         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            Featured Products
                         </h1>
                         
                         <h2 className="text-center mx-auto text-yellow-600 text-[0.9rem] uppercase my-8">
                           Solutions built around businesses workflow.
                         </h2>
                    </header> 
                    <div className="w-full grid md:grid-cols-2 gap-6 mt-24">
                         {featuredProducts.map((item)=>
                             
                           <article key={item.id} className="relative w-full border roundexl p-4 space-y-3 rounded-2xl bg-[#222831] text-white">
                              <div className="absolute -top-5 skew-y-2 right-2 w-65 rounded-xl h-90 z-10 overflow-hidden">
                                   <img src={item.img} alt={item.alt} className="w-full h-full obgject-cover " />
                              </div>
                              
                              <h1 className="text-2xl md:text-3xl font-semibold">{item.title}</h1>
                              <p className="font-light text-sm">{item.use}</p>
                              <p className="w-1/2">
                                   {item.description}
                              </p>
                              <span className="font-semibold">Idea for : </span>
                              <div className="w-1/2 flex gap-4 flex-wrap mt-8">
                                  {item.audience.map((audience)=>
                                      <p key={audience.id} 
                                         className="border border-yellow-600/30 bg-yellow-600/10 p-2 rounded-xl">
                                        {audience.title}
                                     </p>
                                   )}   
                              </div>
                           </article>
                         )
                        }
                         
                    </div>  




                    {/*<main className=" mx-auto p-4  overflow-hidden border border-black/5 my-16 rounded-2xl shadow-sm">
                         <div className="grid md:grid-cols-2 lg:grid-cols-2">
                              <aside className="md:relative">
                                   {/* meta data 
                                   <div className="flex items-center gap-3 my-6">
                                     <span className="text-sm md:text-md">E-commerce Platform </span>
                                     <span className="text-sm md:text-md">Available for businesses of all sizes</span>
                                   </div>
                                   
                                   <h3 className="text-2xl lg:text-3xl font-bold my-3">
                                        SmartShop
                                   </h3>
                                   <p className="text-sm mb-6">
                                        Your business. Your products. Your online store.
                                    </p>

                                   <p className="mt-8 mb-4 text-lg">
                                          A fully branded e-commerce platform designed for 
                                          businesses that want to sell online without compromising 
                                          their identity.
                                   </p>
                                   
                                   {/*<div className=" grid gap-5 my-16 sm:grid-cols-2 md:grid-cols">
                                   
                                        <div className="border border-black/8 rounded-xl p-5 shadow-xl bg-white space-y-6">
                                                  <h4 className="font-semibold">
                                                       Manage products with ease
                                                  </h4>
                                                  <p className="text-sm">
                                                       Update inventory, pricing and product information from one dashboard.
                                                  </p>
                                        </div>

                                        <div className="border border-black/8 rounded-xl p-5 shadow-xl bg-white space-y-6">
                                                  <h4 className="font-semibold ">
                                                       Receive and track orders
                                                  </h4>
                                                  <p className="text-sm">
                                                       Streamline order fulfilment and customer communication.
                                                  </p>
                                        </div>

                                        <div className="border border-black/8 rounded-xl p-5 shadow-xl bg-white space-y-6">
                                                  <h4 className="font-semibold">
                                                       Reach customers everywhere
                                                  </h4>
                                                  <p className="text-sm">
                                                       Give customers access to your business anytime and from any device.
                                                  </p>
                                        </div>

                                   </div>

                                   
                                         <Link to=''
                                             className="
                                                hidden
                                                md:block
                                                md:absolute
                                                bottom-6
                                                left-2
                                                px-8 
                                                py-4 
                                                text-base 
                                                font-medium 
                                                text-gray-900 
                                                bg-[#03045e]/10 
                                                border border-blue-500/50
                                                rounded-lg 
                                                hover:bg-gray-100 
                                               ">
                                             Request A Demo
                                          </Link>

                                   </aside>

                                   
                                   <aside className=" 
                                               flex 
                                               justify-center 
                                               py-6 
                                               
                                               ">

                                        <div className="
                                               relative
                                               flex
                                               flex-col
                                               items-end
                                               max-h-100
                                               md:max-h-80 
                                               overflow-hidden 
                                               gap-4 
                                               w-full
                                               md:px-2
                                               
                                               ">
                                          {/*   MARQUE BORDER TOP 
                                          <div className="
                                                absolute 
                                                top-0 
                                                w-full 
                                                z-50 
                                                h-5 
                                                bg-gradient-to-b 
                                                from-white 
                                                via-white/50 
                                                to-transparent 
                                                white/0
                                                "
                                          />
                                          {/*   MARQUE BORDER bottom 
                                          <div className="
                                                  
                                                  absolute 
                                                  bottom-0 
                                                  w-full 
                                                  z-50 
                                                  h-5 
                                                  bg-gradient-to-t 
                                                  from-white 
                                                  via-white/50 
                                                  to-transpar
                                          <div className="
                                                  
                                                  flex 
                                                  flex-col
                                                 
                                                  w-full
                                                  md:max-w-75 
                                                  
                                                  animate -(--animate-marqueeMobile) 
                                                  md: animate-(--animate-marquee)
                                                  "
                                                  >

                                                  
                                                  <div className="
                                                        border 
                                                        border-black/8 
                                                        rounded-xl 
                                                        
                                                        p-5 
                                                        my-3
                                                        
                                                        shadow-xl 
                                                        bg-red-950 
                                                        text-white
                                                        space-y-6
                                                        "> 
                                                       <h4 className="font-semibold">
                                                            Sell online under your own brand
                                                       </h4>
                                                       <p className="text-sm">
                                                            Own the customer relationship and strengthen your brand identity.
                                                       </p>
                                                  </div>
                                                    <div className="
                                                        border 
                                                        border-black/8 
                                                        rounded-xl 
                                                         
                                                        bg-blue-950 
                                                        text-white
                                                        p-5 
                                                        md:my-3
                                                        
                                                        p-5 
                                                        my-3
                                                        shadow-xl 
                                                        
                                                        space-y-6
                                                        "> 
                                                       <h4 className="font-semibold">
                                                            Manage products with ease
                                                       </h4>
                                                       <p className="text-sm">
                                                            Update inventory, pricing and 
                                                            product information from one 
                                                            dashboard.
                                                       </p>
                                                  </div>
                                                    <div className="
                                                        border 
                                                        border-black/8 
                                                        rounded-xl 
                                                        
                                                        p-5 
                                                        md:my-3
                                                        
                                                        p-5 
                                                        my-3
                                                        shadow-xl 
                                                        bg-yellow-900 
                                                        text-white 
                                                        space-y-6
                                                        "> 
                                                       <h4 className="font-semibold">
                                                            Receive and track orders
                                                       </h4>
                                                       <p className="text-sm">
                                                            Streamline order fulfilment and 
                                                            customer communication. 
                                                       </p>
                                                  </div>
                                                   <div className="
                                                        border 
                                                        border-black/8 
                                                        rounded-xl 
                                                        p-5 
                                                        my-3
                                                        
                                                        shadow-xl 
                                                        bg-green-900 
                                                        text-white 
                                                        space-y-6
                                                        "> 
                                                       <h4 className="font-semibold">
                                                            Reach customers everywhere
                                                       </h4>
                                                       <p className="text-sm">
                                                  <div className="
                                                        border 
                                                        border-black/8 
                                                        rounded-xl 
                                                        p-5 
                                                        my-3
                                                        
                                                        shadow-xl 
                                                        bg-red-950 
                                                        text-white 
                                                        space-y-6
                                                        "> 
                                                       <h4 className="font-semibold">
                                                            Sell online under your own brand
                                                       </h4>
                                                       <p className="text-sm">
                                                            Own the customer relationship and strengthen your brand identity.
                                                       </p>
                                                  </div>
                                                    <div className="
                                                        border 
                                                        border-black/8 
                                                        rounded-xl 
                                                        p-5 
                                                        my-3
                                                        shadow-xl 
                                                        bg-blue-950 
                                                        text-white 
                                                        space-y-6
                                                        "> 
                                                       <h4 className="font-semibold">
                                                            Manage products with ease
                                                       </h4>
                                                       <p className="text-sm">
                                                            Update inventory, pricing and 
                                                            product information from one 
                                                            dashboard.
                                                       </p>
                                                  </div>
                                                    <div className="
                                                        border 
                                                        border-black/8 
                                                        rounded-xl 
                                                        p-5 
                                                        my-3
                                                        shadow-xl 
                                                        bg-yellow-900 
                                                        text-white 
                                                        space-y-6
                                                        "> 
                                                       <h4 className="font-semibold">
                                                            Receive and track orders
                                                       </h4>
                                                       <p className="text-sm">
                                                            Streamline order fulfilment and 
                                                            customer communication. 
                                                       </p>
                                                  </div>
                                                   <div className="
                                                        border 
                                                        border-black/8 
                                                        rounded-xl 
                                                        p-5 
                                                        my-3
                                                        shadow-xl 
                                                        bg-green-900 
                                                        text-white  
                                                        space-y-6
                                                        "> 
                                                       <h4 className="font-semibold">
                                                            Reach customers everywhere
                                                       </h4>
                                                       <p className="text-sm">
                                                            Give customers access to your business 
                                                            anytime and from any device. 
                                                       </p>
                                                  </div>

                                          </div>
                                          
                                        </div>

                                   </aside>

                                   <Link to=''
                                   className="
                                        md:hidden
                                        px-8 
                                        py-4 
                                        my-8
                                        text-base 
                                        text-center
                                        font-medium 
                                        text-gray-900 
                                        bg-[#03045e]/10 
                                        border border-blue-500/50
                                        rounded-lg 
                                        hover:bg-gray-100 
                                        ">
                                   Request A Demo
                              </Link>

                              </div>

                              
                         </main>*/}
                    </div> 
            </section>
       )
}

export default FeaturedSolutions;