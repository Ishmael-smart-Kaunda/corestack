import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";


const FeaturedSolutions = () =>{
       return(
            <section className="w-full p-6 md:py-16">
               <div className="max-w-screen-lg mx-auto">
                    <header className="w-fit mx-auto text-center space-y-6">
                         <h1 className="text-3xl md:text-4xl font-bold">
                            Featured Solutions
                         </h1>
                         <h2 className="text-xl md:text-2xl font-mibold ">
                           Solutions built around businesses workflow.
                         </h2>
                    </header>   
                    <main className=" mx-auto p-4  overflow-hidden border border-black/5 my-16 rounded-2xl shadow-sm">
                         <div className="grid md:grid-cols-2 lg:grid-cols-2">
                              <aside className="md:relative">
                                   {/* meta data 
                                   <div className="flex items-center gap-3 my-6">
                                     <span className="text-sm md:text-md">E-commerce Platform </span>
                                     <span className="text-sm md:text-md">Available for businesses of all sizes</span>
                                   </div>
                                   */}
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

                                   </div>*/}

                                   
                                         <Link to=''
                                             className="
                                                md:absolute
                                                bottom-6
                                                left-2
                                                inline-flex 
                                                items-center 
                                                justify-center 
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
                                               bor der
                                               ">

                                        <div className="
                                               relative
                                               flex
                                               flex-col
                                               items-end
                                               md:max-h-80 
                                               overflow-hidden 
                                               gap-4 
                                               w-full
                                               px-2
                                               borde r
                                               ">
                                          {/*   MARQUE BORDER TOP */}
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
                                          {/*   MARQUE BORDER bottom */}
                                          <div className="
                                                  absolute 
                                                  bottom-0 
                                                  w-full 
                                                  z-50 
                                                  h-5 
                                                  bg-gradient-to-t 
                                                  from-white 
                                                  via-white/50 
                                                  to-transparent
                                                  "/>
                                          {/*CONTENT */}
                                          <div className="
                                                  hidden
                                                  md:flex 
                                                  flex-col
                                                  w-full
                                                  md:max-w-70 
                                                  bord er
                                                  animate -(--animate-marqueeMobile) 
                                                  md:animate-(--animate-marquee)
                                                  "
                                                  >

                                                  
                                                  <div className="
                                                        border 
                                                        border-black/8 
                                                        rounded-xl 
                                                        
                                                        p-5 
                                                        md:my-3
                                                        
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
                                                        md:my-3
                                                        
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

                                                  {/*DOUBLE THE CONTENT FOR MARQUE EFFECT */}
                                                  <div className="
                                                        border 
                                                        border-black/8 
                                                        rounded-xl 
                                                        p-5 
                                                        md:my-3
                                                        
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



                                                  {/*
                                                  <div class=" hidden
                                                          w-full 
                                                          h-70 
                                                          mb-4 
                                                          bg-black/10 
                                                          rounded-md 
                                                          shrink-0 
                                                          overflow-hidden
                                                          ">
                                                       <img src="https://i.pinimg.com/736x/cd/13/14/cd13147ad6658e5fa3f50927cc2373e4.jpg" 
                                                       alt="shirts on stock" 
                                                       className="w-full h-full object-cover" />
                                                  </div>
                                                  <div class=" hidden
                                                  w-full h-70 mb-4 bg-black/10 rounded-md shrink-0 overflow-hidden">
                                                       <img src="https://i.pinimg.com/736x/55/34/5b/55345b66755c3a6b2b220ce17c7eaba5.jpg" 
                                                       alt="shirts on stock" 
                                                       className="w-full h-full object-cover" />
                                                  </div>
                                                  <div class=" hidden w-full h-70 mb-4 bg-black/10 rounded-md shrink-0 overflow-hidden">
                                                       <img src="https://i.pinimg.com/1200x/93/89/ae/9389ae8c329b528a2270f7b6a19b3176.jpg" 
                                                       alt="shirts on stock" 
                                                       className="w-full h-full object-cover" />
                                                  </div>*/}
                                                  

                                                 {/*
                                                  <div class="w-full h-70 mb-4 bg-black/10 rounded-md shrink-0 overflow-hidden">
                                                       <img src="https://i.pinimg.com/736x/cd/13/14/cd13147ad6658e5fa3f50927cc2373e4.jpg" 
                                                       alt="shirts on stock" 
                                                       className="w-full h-full object-cover" />
                                                  </div>
                                                  <div class="w-full h-70 mb-4 bg-black/10 rounded-md shrink-0 overflow-hidden">
                                                       <img src="https://i.pinimg.com/736x/55/34/5b/55345b66755c3a6b2b220ce17c7eaba5.jpg" 
                                                       alt="shirts on stock" 
                                                       className="w-full h-full object-cover" />
                                                  </div>
                                                  <div class=" w-full h-70 mb-4 bg-black/10 rounded-md shrink-0 overflow-hidden">
                                                       <img src="https://i.pinimg.com/1200x/93/89/ae/9389ae8c329b528a2270f7b6a19b3176.jpg" 
                                                       alt="shirts on stock" 
                                                       className="w-full h-full object-cover" />
                                                  </div>*/}
                                          </div>
                                          
                                        </div>

                                   </aside>

                              </div>
                         </main>
                    </div> 
            </section>
       )
}

export default FeaturedSolutions;