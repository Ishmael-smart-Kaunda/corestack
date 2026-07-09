import { Link } from "react-router-dom";



const NoPageFound = () =>{
         return(
                <div 
                  className="
                    w-full 
                    h-[100vh]
                    flex
                    
                  ">
                 <div 
                    className="
                     w-fit
                     max-w-[1180px]
                     rounded-lg
                     m-auto
                     flex
                     flex-col
                     items-center
                     gap-16
                     shadow
                     bor der
                     border-[#03045e]/20
                     p-6
                    ">
                     <h1 
                        className="
                          text-3xl 
                          text-4xl 
                          font-bold
                          text-center
                          text-[#03045e]

                        ">
                          Oops!! Page Not Found
                        </h1>
                        <Link 
                           to='/'
                           className="
                            px-8 
                            py-4
                            border
                            border-black/10
                            rounded-md
                            font-bold
                            text-2xl

                            ">
                            Back
                        </Link>
                    </div>
                </div> 
         )
}
export default NoPageFound;